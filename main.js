const Africastalking = require('africastalking');
// const { async } = require('validate.js');
const AT = Africastalking({username:'chukauniapp', apikey:'60d236b178e3e539961ee8e9e0686c05f69961f341f0a001d753fe6482b92f21',
}).SMS;

const sendSMS = async() => {
    const output = await AT.send({
        to: ['+254769777397', '+254743466465'],
        message: 'Hello',
        enque: true
    })
    console.log({output})
}
sendSMS();