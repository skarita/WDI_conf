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
    var $row = $('<div>')
    Object.keys(obj).forEach(function(key) {
      var $seat = $('<div class="seat">')
      if (obj[key] === 'reserved') {
        $seat.addClass('reserved')
      }
      $seat.appendTo($row)
    })
    $row.appendTo('#wrapper');
  });
}

module.exports = renderSeats;
