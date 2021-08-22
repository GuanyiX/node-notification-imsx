# node-notification-imsx
:envelope: Powerful node package provides capabilities of sending emails, sms and notifications.

This package provides capabilities of sending emails, sms and notifications. To correctly use this package, please refer to the following instructions.

```
const notification_admin = require('node-notification-imsx');

notification_admin.sendMessage(config, payload, method)
  .then(console.log)
  .catch(console.error)

```

Notes:
  - Please use different services by switching methods
    - nodemailer: 'aws_email'
    - sms: 'twilio_sms'
    - notification: 'firebase_notification' (Coming soon)
  - Please use different object structures of config and payload in different services
  - Please replace all the following variables with yours

## Send emails 

```
  const config = {
    host: 'email-smtp.us-west-2.amazonaws.com',
    port: 587,
    secure: false,
    auth: {
      user: 'ABACCSCSWDSS...',
      pass: 'SDCsdfiSin90234....'
    }
  }

  // Please use HTML in content

  const payload = {
    sender: 'Sample Sender <noreply@sample.com.au>',
    receiver: 'sample@sample.com',
    subject: 'Hello world',
    content: '<h1>Hello, how are you today</h1>'
  }

  const method = 'aws_email'

```

## Send SMS

```
  const config = {
    api_key: 'ABSNSUCISJ...',
    api_secret: 'hsdifnwefnofwwm98102...',
    account_sid: 'Aisdfwe2934234....',
    message_service_sid: 'SIODIW023940s00...'
  }

  const payload = {
    receiver: '+61...',
    content: 'Hello world'
  }

  const method = 'twilio_sms'

```

