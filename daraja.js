let unirest = require('unirest');

function initiateSTKPush(phoneNumber, amount, reference, description) {
    return new Promise((resolve, reject) => {
      unirest.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest')
        .headers({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer awGphFqD8M4AVUXqIPEyHPGkVA7Z'
        })
        .send({
          "BusinessShortCode": 174379,
          "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwMzEyMjAxMjM3",
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

//initiateSTKPush(254793599569, 1, "Lipa Fare", "Payment for x")