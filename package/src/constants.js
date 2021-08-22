'use strict';

const METHODS = Object.freeze({
  AWS_MAILER: 'aws_email',
  TWILIO_SMS: 'twilio_sms',
  FIREBASE_NOTIFICATION: 'firebase_notification'
});

const MESSAGES = Object.freeze({
  email_successful: 'Successfully sent the email',
  sms_successful: 'Successfully sent the sms',
  sms_failed: 'Unable to send sms',
  notification_successful: 'Successfully sent notification',
  unknown_method: 'Unknown Method',
})

const rtnPayload_Wrapper = (success, message) => {
  return {
    'success': success,
    'error': success ? '' : message,
    'message': success ? message : ''
  }
}


module.exports = {
  METHODS,
  MESSAGES,
  rtnPayload_Wrapper
}