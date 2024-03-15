const Africastalking = require('africastalking');
// const { async } = require('validate.js');
const AT = Africastalking({username:'chukauniapp', apikey:'xxxxxx',
}).SMS;

const sendSMS = async() => {
    const output = await AT.send({
        to: ['xxxxxx', '+xxxxxx'],
        message: 'Hello',
        enque: true
    })
    console.log({output})
}
sendSMS();