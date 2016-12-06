const $ = require('jquery')

var renderSeats = function() {

  var talks = {}

  $('<div id="wrapper" class="modal">').appendTo('#modal-wrapper');
  $('<h5>').text('Payment Sucessful').appendTo('#wrapper');
  $('<p>').text('Would you like to reserve seating?').appendTo('#wrapper');
  $('<button>').text('Skip').appendTo('#wrapper');
  $('<div>').text('stage').appendTo('#wrapper');

  $.each(talks.seats, function(i, obj) {
    var $row = $('<div>')
    Object.keys(obj).forEach(function(key) {
      var $seat = $('<div class="seat">')
      if (obj[key] === 'reserved') {
        $seat.addClass('reserved')
      } else {
        $seat.click(function() {
          if ($('.seat-selected').length < 1) {
            $seat.toggleClass('seat-selected')
          } else {
            $seat.removeClass('seat-selected')
          }
        })
      }
      $seat.appendTo($row)
    })
    $row.appendTo('#wrapper');
  });

  $('<button>').text('Submit').appendTo('#wrapper')
}

module.exports = renderSeats;
