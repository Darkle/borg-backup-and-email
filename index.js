const path = require('path')
const os = require('os')

const dateFormat = require('dateformat')
const notifier = require('node-notifier')
const mailgunjs = require('mailgun-js')
const onExit = require('signal-exit')
const exec = require('executive')

require('dotenv').config()
const { config } = require('./borg.config.js')

const date = dateFormat(new Date(), 'yyyy-mm-dd-HHMMss')
const osHostname = os.hostname()
const mailgun = mailgunjs({
  domain: process.env.MAILGUN_DOMAIN,
  apiKey: process.env.MAILGUN_PRIVATE_APIKEY
})
const mailOptions = {
  from: 'Borg Backup <borg@localhost.dev>',
  to: process.env.DESTINATION_EMAIL,
}
/*****
* We always use '--show-rc' because we check the borg return code message
* to see if borg terminated with an error.
*/
const borgCreateParams = [
  ...config.create.options,
  '--show-rc',
  generateExcludes(),
  `${ config.create.repository }::${ config.create.prefix || osHostname }-${ date }`,
  generateFoldersToBackup(),
]
const borgPruneParams = [
  ...config.prune.options,
  '--show-rc',
  `--prefix ${ config.prune.prefix || osHostname }-`,
  `--keep-daily ${ config.prune.keepDaily }`,
  `--keep-weekly ${ config.prune.keepWeekly }`,
  `--keep-monthly ${ config.prune.keepMonthly }`,
  config.prune.repository
]

exec.quiet(
  [
    `borg create ${ borgCreateParams.join(' ') }`,
    `borg prune ${ borgPruneParams.join(' ') }`,
  ],
  notifyAndEmail
)

function generateExcludes(){
  if(config.create.excludes.length < 1) return ''
  return config.create.excludes.reduce((acc, curr) =>
    `${acc} --exclude "${ curr }"`
  , '')
}

function generateFoldersToBackup(){
  if(config.create.foldersToBackup.length < 1) throw new Error('No folders to back up!')
  return config.create.foldersToBackup.reduce((acc, curr) =>
    `${acc} "${ curr }"`
  , '')
}

/*****
* Borg logs to stderr by default.
*/
function notifyAndEmail(er, stdout, stderr){
  const messageTitle = generateMessageTitle(checkIfErrorOccured(stderr))
  showDesktopNotification(messageTitle, stderr)
  sendEmail(messageTitle, stderr)
}

function checkIfErrorOccured(result){
  return result.includes('terminating with error status,')
}

function sendEmail(messageTitle, messageText){
  mailgun.messages().send(
    {
      ...mailOptions,
      subject: messageTitle,
      html: `<pre> ${ messageText } </pre>`
    },
    err => {
      if (err){
        console.error(err)
      }
    }
  )
}

function showDesktopNotification(messageTitle, messageText){
  notifier.notify({
    title: messageTitle,
    message: messageText
  })
}

function generateMessageTitle(errorOccured){
  return errorOccured ? 'Borg Backup Encountered An Error 💩' : 'Borg Backup Completed Successfully 😎'
}

/*****
* Try to always break lock on exit in case we exited because an error occured.
*/
onExit(() => exec(`borg break-lock ${ config.create.repository }`, {sync: true}))

process.on('unhandledRejection', bailOnFatalError)
process.on('uncaughtException', bailOnFatalError)

function bailOnFatalError(err){
  console.error(err)
  process.exit(1)
}
