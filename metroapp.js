const express = require("express");
const bodyParser = require("body-parser");
const daraja = require("./daraja")

const app = express();
const port = process.env.PORT || 3000;

const date = new Date();
let currTime = date.getHours();
let fare = 50;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;
  let response = "";
  const textParts = text.split("*");
  const level = textParts.length;
  const lastOption = textParts[level - 1];

  if (text === '') {
    response = 'CON Welcome to Metro New Lipa Fare. Select your route: \n';
    response += '1. Thika road';
  } else if (text === '1') {
    response = 'CON Select boarding Point: \n';
    response += '1. Thika \n';
    response += '2. Ruiru \n';
    response += '3. Githurai \n';
    response += '4. Tao';
  } else if (text === '1*1' | text === '1*2' | text === '1*3' |text === '1*4' ) {
    response = 'CON Select Alighting Point: \n';
    response += '1. Thika \n';
    response += '2. Ruiru \n';
    response += '3. Githurai \n';
    response += '4. Tao';
  } else if (text === '1*1*2') {
    if (currTime<10 && currTime>4){
        fare = 40
    }else if (currTime > 10 && currTime < 16){fare = 30}
    response += `CON Your Fare to Ruiru is Ksh ${fare} \n `;
    response += 'Enter the number you wish to pay with starting with 254 : \n';
  } else if (text === '1*1*3') {
    if (currTime<10 && currTime>4){
        fare = 100
    }else if (currTime > 10 && currTime < 16){fare = 50}
    response += `CON Your Fare to Githurai is Ksh ${fare} \n `;
    response += 'Enter the number you wish to pay with starting with 254 : \n';
  } else if (text === '1*1*4') {
    if (currTime<10 && currTime>4){
        fare = 100
    }else if (currTime > 10 && currTime < 16){fare = 70}
    response += `CON Your Fare to Tao is Ksh ${fare} \n `;
    response += 'Enter the number you wish to pay with starting with 254 : \n';
  } else if (text === '1*2*1') {
    if (currTime<10 && currTime>4){
        fare = 50
    }else if (currTime > 10 && currTime < 16){fare = 30}
    response += `CON Your Fare to Thika is Ksh ${fare} \n `;
    response += 'Enter the number you wish to pay with starting with 254 : \n';
} else if (text === '1*2*3') {
    if (currTime<10 && currTime>4){
        fare = 50
    }else if (currTime > 10 && currTime < 16){fare = 30}
    response += `CON Your Fare to Githurai is Ksh ${fare} \n `;
    response += 'Enter the number you wish to pay with starting with 254 : \n';
} else if (text === '1*2*4') {
    if (currTime<10 && currTime>4){
        fare = 100
    }else if (currTime > 10 && currTime < 16){fare = 50}
    response += `CON Your Fare to Tao is Ksh ${fare} \n `;
    response += 'Enter the number you wish to pay with starting with 254 : \n';
} else if (text === '1*3*1') {
    if (currTime<10 && currTime>4){
        fare = 70
    }else if(currTime > 10 && currTime < 16){fare = 60}
    response += `CON Your Fare to Tao is Ksh ${fare} \n `;
    response += 'Enter the number you wish to pay with starting with 254 : \n';
} else if (text === '1*3*2') {
    if (currTime<10 && currTime>4){
        fare = 50
    }else if (currTime > 10 && currTime < 16){fare = 40}
    response += `CON Your Fare to Ruiru is Ksh ${fare} \n `;
    response += 'Enter the number you wish to pay with starting with 254 : \n';
} else if (text === '1*3*4') {
    if (currTime<10 && currTime>4){
        fare = 70
    }else if (currTime > 10 && currTime < 16){fare = 50}
    response += `CON Your Fare to Tao is Ksh ${fare} \n `;
    response += 'Enter the number you wish to pay with starting with 254 : \n';
  }else if (text === '1*4*1') {
    if (currTime<10 && currTime>4){
        fare = 70
    }else if (currTime > 10 && currTime < 16){fare = 50}
    response += `CON Your Fare to Tao is Ksh ${fare} \n `;
    response += 'Enter the number you wish to pay with starting with 254 : \n';
} else if (text === '1*4*2') {
    if (currTime<10 && currTime>4){
        fare = 50
    }else if (currTime > 10 && currTime < 16){fare = 40}
    response += `CON Your Fare to Ruiru is Ksh ${fare} \n `;
    response += 'Enter the number you wish to pay with starting with 254 : \n';
} else if (text === '1*4*3') {
    if (currTime<10 && currTime>4){
        fare = 70
    }else if (currTime > 10 && currTime < 16){fare = 50}
    response += `CON Your Fare to Tao is Ksh ${fare} \n `;
    response += 'Enter the number you wish to pay with starting with 254 : \n';
  }else if ((text.startsWith('1*1*')|text.startsWith('1*2*')|text.startsWith('1*3*')) && text.split('*').length === 4) {
        const phone = text.split('*')[3];
        daraja.initiateSTKPush(phone, fare, "Lipa Fare", "Payment of X");
        response += `END Confirm the STK push sent. Enter PIN and wait for confirmation message.`
  } else if (text === '1*1*1' | text === '1*2*2'| text === '1*3*3'| text === '1*4*4') {
    response = `END We ni mgonjwa😂😂😂😂`;
  }
  res.send(response);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });