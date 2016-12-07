const $ = require('jquery')

var renderFooterSection = function() {

  // footer section for site
  $('<div class="footer-wrapper">').appendTo('.home-wrapper');

  // background animation effects
  $('<div id="cloud">').appendTo('.footer-wrapper')
  $('<h1>').text('Don\'t miss the opportunity').appendTo('#cloud')
  $('<div class="cloud x1">').appendTo('#cloud')
  $('<div class="cloud x2">').appendTo('#cloud')
  $('<div class="cloud x3">').appendTo('#cloud')
  $('<div class="cloud x4">').appendTo('#cloud')
  $('<div class="cloud x5">').appendTo('#cloud')

  $('<div class="footer-content">').appendTo('.footer-wrapper');

  $('<h2>').text('Text for footer will go here..').appendTo('.footer-content');



}

module.exports = renderFooterSection;
