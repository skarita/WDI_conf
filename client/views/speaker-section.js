const $ = require('jquery')

var renderSpeakerSection = function() {

  // speaker section and list of speakers
  $('<div class="speaker-wrapper">').appendTo('.home-wrapper');
  $('<div class="speaker-list">').appendTo('.speaker-wrapper');
  $('<h1 id="speakers">').text('Speakers').appendTo('.speaker-wrapper')

  // Speaker name, picture and bio
  // Mark Zuckerberg
  $('<div class="speaker-card" id="mark">').appendTo('.speaker-list');
  $('<h2>').text('Mark Zuckerburg').appendTo('#mark');
  $('<div class="img-card" id="mark-card">').appendTo('#mark');
  $('<img src="http://i.imgur.com/uRWMr5W.jpg">').appendTo('#mark-card');
  $('<div class="res-bio" id="mark-bio">').appendTo('#mark');
  $('<ul id="mark-ul">').appendTo('#mark-bio');
  $('<li class="bio">').text('hello').appendTo('#mark-ul');

  // Elon Musk
  $('<div class="speaker-card" id="elon">').appendTo('.speaker-list');
  $('<h2>').text('Elon Musk').appendTo('#elon');
  $('<div class="img-card" id="elon-card">').appendTo('#elon');
  $('<img src="https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg">').appendTo('#elon-card');
  $('<div class="res-bio" id="elon-bio">').appendTo('#elon');
  $('<ul id="elon-ul">').appendTo('#elon-bio');
  $('<li class="bio">').text('hello').appendTo('#elon-ul');

  // Bill Gates
  $('<div class="speaker-card" id="bill">').appendTo('.speaker-list');
  $('<h2>').text('Bill Gates').appendTo('#bill');
  $('<div class="img-card" id="bill-card">').appendTo('#bill');
  $('<img src="http://i.imgur.com/VMAHNMF.jpg">').appendTo('#bill-card');
  $('<div class="res-bio" id="bill-bio">').appendTo('#bill');
  $('<ul id="bill-ul">').appendTo('#bill-bio');
  $('<li class="bio">').text('hello').appendTo('#bill-ul');

  // Marissa Mayer
  $('<div class="speaker-card" id="marissa">').appendTo('.speaker-list');
  $('<h2>').text('Marissa Mayer').appendTo('#marissa');
  $('<div class="img-card" id="marissa-card">').appendTo('#marissa');
  $('<img src="http://i.forbesimg.com/media/lists/people/marissa-mayer_416x416.jpg">').appendTo('#marissa-card');
  $('<div class="res-bio" id="marissa-bio">').appendTo('#marissa');
  $('<ul id="marissa-ul">').appendTo('#marissa-bio');
  $('<li class="bio">').text('hello').appendTo('#marissa-ul');

  // Daniel Tsui
  $('<div class="speaker-card" id="dt">').appendTo('.speaker-list');
  $('<h2>').text('Daniel Tsui').appendTo('#dt');
  $('<div class="img-card" id="dt-card">').appendTo('#dt');
  $('<img src="http://i.imgur.com/jX8TxER.jpg">').appendTo('#dt-card');
  $('<div class="res-bio" id="dt-bio">').appendTo('#dt');
  $('<ul id="dt-ul">').appendTo('#dt-bio');
  $('<li class="bio">').text('He\'s doing ok.').appendTo('#dt-ul');

  // John Doe
  $('<div class="speaker-card" id="john">').appendTo('.speaker-list');
  $('<h2>').text('John Doe').appendTo('#john');
  $('<div class="img-card" id="john-card">').appendTo('#john');
  $('<img src="http://i.imgur.com/jX8TxER.jpg">').appendTo('#john-card');
  $('<div class="res-bio" id="john-bio">').appendTo('#john');
  $('<ul id="john-ul">').appendTo('#john-bio');
  $('<li class="bio">').text('hello').appendTo('#john-ul');

  $('.res-bio').hide();
  $('.speaker-card').on('click', function(event) {

    $(event.target).children().slideToggle();

  })

}

module.exports = renderSpeakerSection;
