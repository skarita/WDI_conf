const $ = require('jquery')
const confirmationForm = require('./confirmation-form.js')
const stripeResponseHandler = require('../scripts/stripe-payment.js')


var renderPaymentForm = function() {

  $('<div id="payment-form">').appendTo('#payment-form-modal')

  $('<span class="close-btn">').text('X').appendTo('#payment-form-modal')
  $('<label class="num-ticket">').text('Number of Tickets: ').appendTo('#payment-form')
  $('<input class="num-input" type="number" value="1" name="quantity">').appendTo('#payment-form')
  $('<h2 id="price">').text('Total: $500').appendTo('#payment-form')
  $('<hr>').appendTo('#payment-form')

  $('<h1>').text('Your Details').appendTo('#payment-form')

  $('<input class="input-form" placeholder="Full Name" name="name">').appendTo('#payment-form')
  $('<input class="input-form" placeholder="Email" name="email">').appendTo('#payment-form')
  $('<input class="input-form" placeholder="Confirm Email">').appendTo('#payment-form')

  $('<hr>').appendTo('#payment-form')
  $('<h1>').text('Payment Details').appendTo('#payment-form')

  $('<form id="payment-stripe-form">').attr('method', 'post').attr('action', 'http://localhost:3030/pay').appendTo('#payment-form')

  $('<input class="input-form" placeholder="Name on Card">').appendTo('#payment-stripe-form')
  $('<input class="input-form" placeholder="Card Number" value="4242424242424242">').attr('data-stripe', 'number').appendTo('#payment-stripe-form')
  $('<input placeholder="Expiry Month">').attr('data-stripe', 'exp_month').appendTo('#payment-stripe-form')
  $('<input placeholder="Expiry Year">').attr('data-stripe', 'exp_year').appendTo('#payment-stripe-form')
  $('<input class="input-form" placeholder="CSV">').attr('data-stripe', 'cvc').appendTo('#payment-stripe-form')
  $('<hr>').appendTo('#payment-stripe-form')

  $('<input type="submit" class="submit" value="Submit Payment">').attr('id', 'submit-btn').appendTo('#payment-stripe-form')
  $('<form action="/" class="home-link">').appendTo('#payment-stripe-form')
  $('<button>').text('Cancel').attr('id', 'cancel-btn').appendTo('.home-link')


  $('<span class="payment-errors">').appendTo('#payment-form')

  $('.close-btn').click(function() {

    $('#modal-wrapper').remove();

  });

  $('#submit-btn').click(function() {

    $('#payment-form').hide();
    $('<div class="loader">').appendTo('#modal-wrapper');

    console.log('clicked submit button');

    var $form = $('#payment-stripe-form');

    $form.submit(function(event) {
      // Disable the submit button to prevent repeated clicks:
      $form.find('.submit').prop('disabled', true);

      // Request a token from Stripe:
      Stripe.card.createToken($form, stripeResponseHandler);

      // Prevent the form from being submitted:
      return false;

    });


  });

  $('input[name="quantity"]').on('input', function() {
    // console.log($(this).val());
    $('#price').text("Total: $" + $(this).val()*500)
  });

}

module.exports = renderPaymentForm
