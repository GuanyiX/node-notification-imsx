'use strict';

const nodemailer = require('nodemailer');
const { MESSAGES, rtnPayload_Wrapper } = require('./constants');

/**
 * Send email using AWS and return results
 * @param {Object} config - The configuration of email transporter
 * @param {string} config.host - Host name
 * @param {number} config.port - Port number
 * @param {boolean} config.secure - Port secure
 * @param {Object} config.auth - Authentication
 * @param {string} config.auth.user 
 * @param {string} config.auth.pass 
 * 
 * @param {Object} payload - Generic input payload
 * @param {string} payload.sender 
 * @param {string} payload.receiver 
 * @param {string} payload.subject 
 * @param {string} payload.content - html  
 * 
 * @returns {Object} { success, error, message }
 */

const sendMessage_email = async (config, payload) => {
  try {
    const transporter = nodemailer.createTransport(config);

    const input = {
      from: payload.sender,
      to: payload.receiver,
      subject: payload.subject,
      html: payload.content
    };
    const info = await transporter.sendMail(input);

    transporter.close();

    return rtnPayload_Wrapper(true, MESSAGES.email_successful);
  } catch (err) {
    return rtnPayload_Wrapper(false, err.message)
  }
}

module.exports = {
  sendMessage_email
}

