var bitcoin = require('bitcoin');
var client = new bitcoin.Client({
    host: 'localhost',
    port: 19001,
    user: 'admin1',
    pass: '123'
});


// var from = 
var to = 'mfY2sZASb4m6CPbHT5fEeYQGSfKoDfuwvZ';
var amount = 10;

client.getBalance(function (err, res) {
    if (err) {
        return console.error(err);
    }
    console.log("Current blanance address1: " + res);
})

client.sendToAddress(to, amount, function (err, res) {
    if (err) {
        return console.error(err);
    }
    console.log("Transaction: " + res)

    client.getBalance(function (err, res) {
        if (err) {
            return console.error(err);
        }
        console.log("Current blanance address1: " + res);
    })
})

