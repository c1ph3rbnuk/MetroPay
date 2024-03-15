// Set your app credentials
const credentials = {
    apiKey: 'xxxxxx',
    username: 'votex',
}

// Initialize the SDK
const AfricasTalking = require('africastalking');

// Get the SMS service
const sms = AfricasTalking({...credentials}).SMS;

function sendMessage(phone) {
    const options = {
        // Set the numbers you want to send to in international format
        to: [phone],
        // Set your message
        message: "Thank you for Choosing to travel with Metro Sacco.",
        // Set your shortCode or senderId
        // from: 'Coyotito',
        enque: true
    }

    // That’s it, hit send and we’ll take care of the rest
    sms.send(options)
        .then(console.log)
        .catch(console.log);
}

module.exports = {
    sendMessage : sendMessage
}
