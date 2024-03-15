let unirest = require('unirest');

function initiateSTKPush(phoneNumber, amount, reference, description) {
    return new Promise((resolve, reject) => {
      unirest.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest')
        .headers({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer xxxxxx'
        })
        .send({
          "BusinessShortCode": 174379,
          "Password": "xxxxxx",
          "Timestamp": "20240312201237",
          "TransactionType": "CustomerPayBillOnline",
          "Amount": amount,
          "PartyA": phoneNumber,
          "PartyB": 174379,
          "PhoneNumber": phoneNumber,
          "CallBackURL": "https://mydomain.com/path",
          "AccountReference": reference,
          "TransactionDesc": description
        })
        .end((res) => {
          if (res.error) {
            reject(res.error);
          } else {
            resolve(res.raw_body);
          }
        });
    });
  }

module.exports = {
    initiateSTKPush: initiateSTKPush
};
