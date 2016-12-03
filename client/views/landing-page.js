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
  $('<li> <a id="fourth">').appendTo('ul')
  $('#first').text('Speakers')
  $('#second').text('Sponsors')
  $('#third').text('Location')
  $('#fourth').text('Buy Tickets')

  $('<h1>').text('WDI CONF 2017').appendTo('.home-top-wrapper')

  $('<a class="buy-ticket-btn">').text('Buy Tickets').appendTo('.home-top-wrapper')

  $('.buy-ticket-btn').click(function() {

    $('.home-wrapper').remove()

    renderPaymentForm()

  })

}

module.exports = renderLandingPage
