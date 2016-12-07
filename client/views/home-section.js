const $ = require('jquery')

var renderHomeSection = function() {

  $('<div class="home-wrapper">').appendTo('#root')
  $('<div class="home-main">').appendTo('.home-wrapper')

  // nav menu section
  $('<section class="home-top-wrapper">').appendTo('.home-main')
  $('<nav class="home-nav">').appendTo('.home-top-wrapper')
  $('<ul>').appendTo('.home-nav')
  $('<li> <a id="first" href="#speakers">').appendTo('ul')
  $('<li> <a id="second" href="#sponsors">').appendTo('ul')
  $('<li> <a id="third" href="#location">').appendTo('ul')
  $('<li class="nav-ticket-btn"> <a id="fourth">').appendTo('ul')
  $('#first').text('Speakers')
  $('#second').text('Sponsors')
  $('#third').text('Location')
  $('#fourth').text('Buy Tickets')

  // middle section. location and h1
  $('<h1>').text('WDI CONF 2017').appendTo('.home-top-wrapper')
  $('<section class="home-middle-wrapper">').appendTo('.home-main')
  $('<div class="home-middle-location">').appendTo('.home-middle-wrapper')
  $('<h2>').text('Melbourne').appendTo('.home-middle-location')
  $('<h3>').text('General Assembly').appendTo('.home-middle-location')

  // bottom section. Buy tickets button
  $('<section class="home-bottom-wrapper">').appendTo('.home-main')
  $('<div class="home-bottom-button">').appendTo('.home-bottom-wrapper')
  $('<a class="buy-ticket-btn">').text('Buy Tickets').appendTo('.home-bottom-button')

}

module.exports = renderHomeSection;
