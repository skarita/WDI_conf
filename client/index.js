require('./styles/main.scss')
const paymentForm = require('./views/payment-form.js')
const $ = require('jquery')
const stripeResponseHandler = require('./scripts/stripe-payment.js')

$('#root').append(paymentForm())
