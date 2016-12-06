const $ = require('jquery')

var renderSpeakerSection = function() {

  // speaker section and list of speakers
  $('<div class="speaker-wrapper">').appendTo('.home-wrapper');
  $('<div class="speaker-list">').appendTo('.speaker-wrapper');
  $('<h1>').text('Speakers').appendTo('.speaker-wrapper')

  // Speaker name, picture and bio
  $('<div class="speaker-card" id="mark">').appendTo('.speaker-list');
  $('<h2>').text('Mark Zuckerburg').appendTo('#mark');
  $('<p class="bio">').text('CEO, chairman and co-founder of Facebook. American computer programmer, internet entrepreneur, and philanthropist.').appendTo('#mark');

  $('<div class="speaker-card" id="elon">').appendTo('.speaker-list');
  $('<h2>').text('Elon Musk').appendTo('#elon');
  $('<p class="bio">').text('Founder, CEO and CTO of SpaceX, co-founder, CEO, product architect of Tesla Mortors, co-founder and chairman of SolarCity; co-chairman of OpenAI, co-founder of Zip2 and founder of X.com which merged with PayPal.').appendTo('#elon');

  $('<div class="speaker-card" id="bill">').appendTo('.speaker-list');
  $('<h2>').text('Bill Gates').appendTo('#bill');
  $('<p class="bio">').text('co-founder of Microsoft and wealthiest person in the world. American business magnate, investor, author and philanthropist.').appendTo('#bill');

  $('<div class="speaker-card" id="marissa">').appendTo('.speaker-list');
  $('<h2>').text('Marissa Mayer').appendTo('#marissa');
  $('<p class="bio">').text('American information technology executive. President and CEO of Yahoo!').appendTo('#marissa');

  $('<div class="speaker-card" id="dt">').appendTo('.speaker-list');
  $('<h2>').text('Daniel Tsui').appendTo('#dt');
  $('<p class="bio">').text('He\'s doing ok.').appendTo('#dt');

  $('.bio').hide();
  $('.speaker-card').on('click', function(event) {

    $(event.target.lastChild).slideToggle();

  })

}

module.exports = renderSpeakerSection;
