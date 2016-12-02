require('./styles/main.scss')
const paymentForm = require('./views/payment-form.js')
const $ = require('jquery')

$('#root').append(paymentForm())
