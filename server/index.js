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

app.post('/reserve', bodyparser(), function(req, res) {
  console.log(
    'https://api.mlab.com/api/1/databases/wdi_conf/collections/talks?apiKey='
    + mLabKey
    + '&q={"presenter":"'
    + req.body.presenter
    + '"}'
  )
  console.log(JSON.stringify({
        $set: req.body.reserved
      }))
  fetch(
    'https://api.mlab.com/api/1/databases/wdi_conf/collections/talks?apiKey='
    + mLabKey
    + '&q={"presenter":"'
    + req.body.presenter
    + '"}', {
      method: 'PUT',
      body: JSON.stringify({
        $set: req.body.reserved
      }),
      headers: {'Content-Type' : 'application/json'}
      }).then(function(response) {
        return response.json()
      }).then(function(json) {
        res.json(json)
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d0e57d802114dabd745f26cb424ce5e3a14f14cf

  fetch('https://api.mlab.com/api/1/databases/wdi_conf/collections/ticketholder?apiKey=' + mLabKey, {
    method: 'POST',
    body: JSON.stringify( {
      name: request.body.name,
      email: request.body.email
     }),
    headers: {'Content-Type' : 'application/json'}
    }).then(function(res) {
      return res.json()
    }).then(function(json) {
      console.log(json)
    })

<<<<<<< HEAD
=======
=======
>>>>>>> 457416029673c829b1c6b71c84524cdf452b76bb
>>>>>>> d0e57d802114dabd745f26cb424ce5e3a14f14cf
});

// Start server
app.listen(3030)
