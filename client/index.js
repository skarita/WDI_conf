require('./styles/main.scss')
const renderLandingPage = require('./views/landing-page.js')
const $ = require('jquery')
const stripeResponseHandler = require('./scripts/stripe-payment.js')

$('#root').append(renderLandingPage())
