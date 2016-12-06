const $ = require('jquery')

var renderSeats = function() {

  var talk = {
    seats: [
      {
        a1: 'available',
        a2: 'reserved'
      },
      {
        b2: 'available',
        b3: 'available'
      }
    ]
  }

  $('<div id="wrapper">').appendTo('#root');
  $('<h5>').text('Payment Sucessful').appendTo('#wrapper');
  $('<p>').text('Would you like to reserve seating?').appendTo('#wrapper');
  $('<button>').text('Skip').appendTo('#wrapper');
  $('<div>').text('stage').appendTo('#wrapper');

  $.each(talk.seats, function(i, obj) {
    var $row = $('<div id="test">')
    Object.keys(obj).forEach(function(key) {
      $('<span>').text(key + " " + obj[key]).appendTo($row);
    })
    $row.appendTo('#wrapper');
  });

}

module.exports = renderSeats;
