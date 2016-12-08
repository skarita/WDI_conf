const $ = require('jquery')

var renderSpeakerSection = function() {

  // speaker section and list of speakers
  $('<div class="speaker-wrapper">').appendTo('.home-wrapper');
  $('<div class="speaker-list">').appendTo('.speaker-wrapper');
  $('<h1 id="speakers">').text('Speakers').appendTo('.speaker-wrapper')

  // Speaker name, picture and bio
  $('<div class="speaker-card" id="mark">').appendTo('.speaker-list');
  $('<h2>').text('Mark Zuckerburg').appendTo('#mark');
  $('<div class="img-card" id="mark-card">').appendTo('#mark');
  $('<img class="pic" src="http://i.imgur.com/uRWMr5W.jpg">').appendTo('#mark-card');

  $('<p class="bio">').text('CEO, chairman and co-founder of Facebook. Computer programmer, internet entrepreneur, and philanthropist.').appendTo('#mark');

  $('<div class="speaker-card" id="elon">').appendTo('.speaker-list');
  $('<h2>').text('Elon Musk').appendTo('#elon');
  $('<div class="img-card" id="elon-card">').appendTo('#elon');
  $('<img class="pic" src="https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg">').appendTo('#elon-card');
  $('<p class="bio">').text('Founder, CEO and CTO of SpaceX, co-founder, CEO, product architect of Tesla Mortors, co-founder and chairman of SolarCity; co-chairman of OpenAI, co-founder of Zip2 and founder of X.com which merged with PayPal.').appendTo('#elon');

  $('<div class="speaker-card" id="bill">').appendTo('.speaker-list');
  $('<h2>').text('Bill Gates').appendTo('#bill');
  $('<div class="img-card" id="bill-card">').appendTo('#bill');
  $('<img class="pic" src="http://i.imgur.com/VMAHNMF.jpg">').appendTo('#bill-card');
  $('<p class="bio">').text('Co-founder of Microsoft and wealthiest person in the world. Business magnate, investor, author and philanthropist.').appendTo('#bill');

  $('<div class="speaker-card" id="marissa">').appendTo('.speaker-list');
  $('<h2>').text('Marissa Mayer').appendTo('#marissa');
  $('<div class="img-card" id="marissa-card">').appendTo('#marissa');
  $('<img class="pic" src="http://i.forbesimg.com/media/lists/people/marissa-mayer_416x416.jpg">').appendTo('#marissa-card');
  $('<p class="bio">').text('President and CEO of Yahoo! Information technology executive and engineer.').appendTo('#marissa');

  $('<div class="speaker-card" id="dt">').appendTo('.speaker-list');
  $('<h2>').text('Daniel Tsui').appendTo('#dt');
  $('<div class="img-card" id="dt-card">').appendTo('#dt');
  $('<img class="pic" src="http://i.imgur.com/jX8TxER.jpg">').appendTo('#dt-card');
  $('<p class="bio">').text('He\'s doing ok.').appendTo('#dt');

  $('.bio').hide();
  $('.speaker-card').on('click', function(event) {

    $(event.target.lastChild).slideToggle();

  })

}

module.exports = renderSpeakerSection;
