# borg-backup-and-email

Note: this is not really intended to be used in production. Use this instead: https://github.com/vesparny/borgjs

##### Set up:
1. Run `npm i`
2. Install borg backup: `apt install borgbackup`
3. Initialize an empty borg backup repository: `borg init --encryption=repokey /path-to-backup/folder`
4. Save the passphrase you used
5. Export the key and save that too: `borg key export --paper /path-to-backup/folder ./key`
6. Add the backup repository path to both `repository` json keys in the `borg.config.js` file.
7. Set the folders to backup in the `borg.config.js` file
8. Set up email on success/fail
    1. Add `DESTINATION_EMAIL=foo@bar.com` with your email address to the `.env` file
    2. Add `MAILGUN_DOMAIN=foo.com` with your mailgun domain to the `.env` file. Note: you can use the mailgun sandbox domain, just allow the email address you want the emails to be sent to - https://help.mailgun.com/hc/en-us/articles/217531258-Authorized-Recipients
    3. Add `MAILGUN_PRIVATE_APIKEY=123` with mailgun private api key to the `.env` file
9. Add your borg passphrase to the `.env` file: `BORG_PASSPHRASE=foo`

##### Checking things are backed up:
  * Use https://borgbackup.readthedocs.io/en/stable/usage/list.html to list all the backups
  * Use https://borgbackup.readthedocs.io/en/stable/usage/extract.html to extract and check the files are there
