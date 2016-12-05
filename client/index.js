require('./styles/main.scss')
require('./styles/reset.scss')
require('./styles/form.scss')
const renderLandingPage = require('./views/landing-page.js')
const $ = require('jquery')
const stripeResponseHandler = require('./scripts/stripe-payment.js')

renderLandingPage()
