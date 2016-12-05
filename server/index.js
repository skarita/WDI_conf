const express = require('express')
const app = express()
const path = require('path')
const mLabKey = require('./scripts/secret-sauce').mLabKey
const fetch = require('node-fetch')
const stripe = require("stripe")("sk_test_ySnrhITknKLkb1NjIbiSWYqI")
const bodyparser = require('body-parser')
const sendConfEmail = require('./scripts/send-email')

app.use(express.static('../scripts'));
app.use(express.static('../views'));

// Routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/test', function(req, res) {
  fetch('https://api.mlab.com/api/1/databases/wdi_conf/collections/test?apiKey=' + mLabKey)
  .then(function(res) {
  return res.json()
}).then(function(json) {
  res.json(json)
})

})

app.post('/pay', bodyparser(), function(request, response) {

  // Get the credit card details submitted by the form
  var token = request.body.stripeToken; // Using Express

  // Create a charge: this will charge the user's card
  var charge = stripe.charges.create({
    amount: 1000, // Amount in cents
    currency: "aud",
    source: token,
    description: "Example charge"
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      // The card has been declined
      console.log(err);
      response.json(err)
    } else {
      console.log(charge)
      sendConfEmail(request.body.email)
      response.json(charge);
    }
  });
  
});

// Start server
app.listen(3030)

// fetch('https://api.mlab.com/api/1/databases/wdi_conf/collections/test?apiKey=' + apiKey, {
//     method: 'POST',
//     body: JSON.stringify( { 'test key' : 'testValue'}),
//     headers: {'Content-Type' : 'application/json'}
// }).then(function(res) {
//   return res.json()
// }).then(function(json) {
//   console.log(json)
// })
