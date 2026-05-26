const axios = require('axios');

async function grabImage(url) {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        return response.data;
    } catch (error) {
        console.error('Error grabbing image:', error);
    }
}

module.exports = { grabImage };
