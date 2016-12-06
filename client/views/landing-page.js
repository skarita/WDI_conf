const $ = require('jquery')
const renderPaymentForm = require('./payment-form.js')


var renderLandingPage = function() {

  $('<div class="home-wrapper">').appendTo('#root')
  $('<section class="home-top-wrapper">').appendTo('.home-wrapper')
  $('<nav class="home-nav">').appendTo('.home-top-wrapper')
  $('<ul>').appendTo('.home-nav')
  $('<li> <a id="first">').appendTo('ul')
  $('<li> <a id="second">').appendTo('ul')
  $('<li> <a id="third">').appendTo('ul')
  $('<li class="nav-ticket-btn"> <a id="fourth">').appendTo('ul')
  $('#first').text('Speakers')
  $('#second').text('Sponsors')
  $('#third').text('Location')
  $('#fourth').text('Buy Tickets')

  $('<h1>').text('WDI CONF 2017').appendTo('.home-top-wrapper')

  $('<section class="home-middle-wrapper">').appendTo('.home-wrapper')
  $('<div class="home-middle-location">').appendTo('.home-middle-wrapper')
  $('<h2>').text('Melbourne').appendTo('.home-middle-location')
  $('<h3>').text('General Assembly').appendTo('.home-middle-location')

  $('<a class="buy-ticket-btn">').text('Buy Tickets').appendTo('.home-wrapper')

  $('.buy-ticket-btn, #fourth').click(function() {

    $('<div id="modal-wrapper" class="modal">').appendTo('#root');
    $('<div id="payment-form-modal" class="modal">').appendTo('#modal-wrapper');
      renderPaymentForm()

  })

}

module.exports = renderLandingPage
