const $ = require('jquery')

var renderSponsorsSection = function() {

  // sponsors section and list of sponsors
  $('<div class="sponsors-wrapper">').appendTo('.home-wrapper');
  $('<div class="sponsors-list">').appendTo('.sponsors-wrapper');

  $('<h2>').text('Sponsors').appendTo('.sponsors-list');
}

module.exports = renderSponsorsSection;
