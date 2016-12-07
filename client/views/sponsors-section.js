const $ = require('jquery')

var renderSponsorsSection = function() {

  // sponsors section and list of sponsors
  $('<div class="sponsors-wrapper">').appendTo('.home-wrapper');
  $('<div class="sponsors-list">').appendTo('.sponsors-wrapper');

  $('<h2 id="sponsors">').text('Sponsors').appendTo('.sponsors-list');

  $('<img src="http://www.litmos.com/wp-content/uploads/2016/01/google-logo1.png"> ').appendTo('.sponsors-list');
  $('<img src="http://www.pragueharleydays.cz/uploaded/filemanager/hooters-logo.svg"> ').appendTo('.sponsors-list');
  $('<img src="http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png"> ').appendTo('.sponsors-list');
  $('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Tesla_Motors_Logo.svg/1236px-Tesla_Motors_Logo.svg.png"> ').appendTo('.sponsors-list');
}

module.exports = renderSponsorsSection;
