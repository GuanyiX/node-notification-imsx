'use strict';

const admin = require('firebase-admin');
const { MESSAGES, rtnPayload_Wrapper } = require('./constants');

/**
 * Send email using AWS and return results
 * @param {Object} config - The configuration of email transporter
 * @param {string} config.jsonPath - firebase key json
 * 
 * @param {Object} payload - Generic input payload
 * @param {Object} payload.data  
 * @param {string} payload.token  
 * 
 * @returns {Object} { success, error, message }
 */

const sendMessage_fb_Notification = async (config, payload) => {
  try {
    const serviceAccount = require(config.jsonPath);
  
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    })
  
    const message = {
      data: payload.data,
      token: payload.token
    }
    await admin.messaging().send(message)

    return rtnPayload_Wrapper(true, MESSAGES.notification_successful);
  } catch (err) {
    return rtnPayload_Wrapper(false, err.message) 
  }
  
}

module.exports = {
  sendMessage_fb_Notification
}