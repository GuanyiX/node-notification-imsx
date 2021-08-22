'use strict';

const { METHODS, MESSAGES, rtnPayload_Wrapper } = require('./src/constants');
const { sendMessage_email } = require('./src/mailer');
const { sendMessage_sms } = require('./src/sms');
const { sendMessage_fb_Notification } = require('./src/fb-notification');

const sendMessage = (config, payload, method) => {
  let rtnPayload;

  try {
    switch(method) {
      case METHODS.AWS_MAILER: {
        rtnPayload = sendMessage_email(config, payload);
        if(rtnPayload.error) throw Error(rtnPayload);
        break;
      }
      case METHODS.TWILIO_SMS: {
        rtnPayload = sendMessage_sms(config, payload);
        if(rtnPayload.error) throw Error(rtnPayload);
        break;
      }
      case METHODS.FIREBASE_NOTIFICATION: {
        rtnPayload = sendMessage_fb_Notification(config, payload);
        if(rtnPayload.error) throw Error(rtnPayload);
      }
      default: {
        throw Error(rtnPayload_Wrapper(false, MESSAGES.unknown_method))
      }
    }

    return rtnPayload;
  } catch (err) {
    return rtnPayload;
  }
}

module.exports = {
  sendMessage
}

