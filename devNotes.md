Example .env file:

```
BORG_PASSPHRASE=foo
MAILGUN_PRIVATE_APIKEY=foo
MAILGUN_DOMAIN=foo
DESTINATION_EMAIL=foog@foo.com

```

If you are going to use the mailgun sandbox domain for sending emails, you will need to add the recipients as authorized recipients: https://help.mailgun.com/hc/en-us/articles/217531258


Example cron:

```
00 02 * * * PATH="/home/coop/.local/bin/:$PATH" /usr/bin/node /home/coop/Coding/borg-backup-and-email/index-compiled.js
```

Note: borg may not be available to cron (it has limited paths), so you may need to add the path borg is installed to. In my case I have it installed to `/home/coop/.local/bin/`
To find out where node and borg are installed just run `which borg` & `which node`
