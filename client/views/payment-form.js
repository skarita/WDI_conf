const $ = require('jquery')
const confirmationForm = require('./confirmation-form.js')


var renderPaymentForm = function() {

  $('<div id="payment-form">').appendTo('body')

  $('<h1>').text('Your Details').appendTo('#payment-form')

  $('<input placeholder="Full Name">').appendTo('#payment-form')
  $('<input placeholder="Email">').appendTo('#payment-form')
  $('<input placeholder="Confirm Email">').appendTo('#payment-form')

  $('<h1>').text('Payment Details').appendTo('#payment-form')

  $('<input placeholder="Name on Card">').appendTo('#payment-form')
  $('<input placeholder="Card Number">').appendTo('#payment-form')
  $('<input placeholder="Expiry">').appendTo('#payment-form')
  $('<input placeholder="CSV">').appendTo('#payment-form')

  $('<h2>').text('Total: $500').appendTo('#payment-form')
  $('<button>').text('Submit').attr('id', 'submit-btn').appendTo('#payment-form')
  $('<button>').text('Cancel').attr('id', 'cancel-btn').appendTo('#payment-form')

  $('#submit-btn').click(function() {

    $('#payment-form').remove()

    confirmationForm()

  })

}

module.exports = renderPaymentForm
