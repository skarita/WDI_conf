const $ = require('jquery')

var renderLocationSection = function() {

  // location section with map of GA
  $('<div class="location-wrapper">').appendTo('.home-wrapper');
  $('<div class="location-top">').appendTo('.location-wrapper');
  $('<div class="location-bottom">').appendTo('.location-wrapper');

  $('<h1 id="location">').text('Location').appendTo('.location-top');
  $('<p>').text('General Assembly').appendTo('.location-top');
  $('<p>').text('Level 12A').appendTo('.location-top');
  $('<p>').text('45, William St, Melbourne VIC 3000').appendTo('.location-top');

}

module.exports = renderLocationSection;