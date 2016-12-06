const express = require('express')
const app = express()
const path = require('path')
const mLabKey = require('./scripts/secret-sauce').mLabKey
const fetch = require('node-fetch')
const stripe = require("stripe")("sk_test_ySnrhITknKLkb1NjIbiSWYqI")
const bodyparser = require('body-parser')
const sendConfEmail = require('./scripts/send-email')
const saveToDb = require('./scripts/save-user-to-db')

app.use(express.static('../scripts'));
app.use(express.static('../views'));

// Routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/testget', function(req, res) {
  fetch('https://api.mlab.com/api/1/databases/wdi_conf/collections/talks?apiKey=' + mLabKey)
    .then(function(res) {
      return res.json()
  }).then(function(json) {
    res.json(json)
  })
})

app.get('/testupdate', function(req, res) {
  fetch(
    'https://api.mlab.com/api/1/databases/wdi_conf/collections/talks?apiKey='
    + mLabKey
    + '&q={"presenter":"Elon Musk"}', {
      method: 'PUT',
      body: JSON.stringify({
        $set: { "seat.a.6": "reserved", "seat.a.7": "reserved" }
      }),
      headers: {'Content-Type' : 'application/json'}
      }).then(function(res) {
        return res.json()
      }).then(function(json) {
        console.log(json)
    })
})

app.post('/pay', bodyparser(), function(request, response) {
  console.log(request.body.quantity * 50000);
  // Get the credit card details submitted by the form
  var token = request.body.stripeToken; // Using Express

  // Create a charge: this will charge the user's card
  var charge = stripe.charges.create({
    amount: request.body.quantity * 50000, // Amount in cents
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
      saveToDb(request.body.name, request.body.email)
      fetch('https://api.mlab.com/api/1/databases/wdi_conf/collections/talks?apiKey=' + mLabKey)
        .then(function(res) {
          return res.json()
        })
        .then((json) => response.json(json))
    }
  });
});

// Start server
app.listen(3030)
