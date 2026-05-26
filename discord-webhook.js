const axios = require('axios');

async function sendToDiscord(webhookUrl, data) {
    try {
        await axios.post(webhookUrl, data);
        console.log('Data sent to Discord webhook');
    } catch (error) {
        console.error('Error sending data to Discord webhook:', error);
    }
}

module.exports = { sendToDiscord };
