'use strict';

const { MESSAGES, rtnPayload_Wrapper } = require('./constants');

/**
 * Send SMS using Twilio and return results
 * @param {Object} config - The configuration of email transporter
 * @param {string} config.api_key - TWILIO API KEY
 * @param {string} config.api_secret - TWILIO API SECRET
 * @param {string} config.account_sid - TWILIO ACCOUNT SID
 * @param {string} config.message_service_sid - TWILIO MESSAGE SERVICE SID
 * 
 * @param {Object} payload - Generic input payload
 * @param {string} payload.receiver 
 * @param {string} payload.content - content 
 * 
 * @returns {Object} { success, error, message }
 */

const sendMessage_sms = async (config, payload) => {
  try {
    const twilio = require('twilio')(config.api_key, config.api_secret, {
      accountSid: config.account_sid
    });

    const rtnPayload = await twilio.messages.create({
      body: payload.content,
      messagingServiceSid: config.message_service_sid,
      to: payload.receiver
    });

    if(rtnPayload.status !== 'accepted') throw Error(MESSAGES.sms_failed);

    return rtnPayload_Wrapper(true, MESSAGES.sms_successful);
  } catch (err) {
    return rtnPayload_Wrapper(false, err.message)
  }
}

module.exports = {
  sendMessage_sms
}