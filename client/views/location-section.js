const $ = require('jquery')
const googleKey = "AIzaSyDq0YCpbd_tAV6UE_XFz-HNbXISiRTXoQ8"

var renderLocationSection = function() {

  // location section with map of GA
  $('<div class="location-wrapper">').appendTo('.home-wrapper');
  $('<div class="location-top">').appendTo('.location-wrapper');
  $('<div class="location-bottom">').appendTo('.location-wrapper');

  $('<h1 id="location">').text('Location').appendTo('.location-top');
  $('<p>').text('General Assembly').appendTo('.location-top');
  $('<p>').text('Level 12A').appendTo('.location-top');
  $('<p>').text('45, William St, Melbourne VIC 3000').appendTo('.location-top');

  // displaying google map with a marker of the location-top
  $('<div id="map">').appendTo('.location-bottom')

  window.initMap = function() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: -37.818467, lng: 144.959096}
  });
  var marker = new google.maps.Marker({
    position: {lat: -37.818467, lng: 144.959096},
    map: map,
    title: 'WDI CONF 2016'
  });
 }




}

module.exports = renderLocationSection;
