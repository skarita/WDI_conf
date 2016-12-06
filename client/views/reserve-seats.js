const $ = require('jquery')

const seatingPlan = (seats) => {
  $('#seat-plan').html('')
  $.each(seats, function(i, obj) {
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
    $row.appendTo('#seat-plan')
  });
}

const renderSeats = function(talks) {
  $('<div id="wrapper" class="modal">').appendTo('#modal-wrapper');
  $('<h5>').text('Payment Sucessful').appendTo('#wrapper');
  $('<p>').text('Would you like to reserve seating?').appendTo('#wrapper');
  $('<button>').text('Skip').appendTo('#wrapper');
  $('<div>').text('stage').appendTo('#wrapper');

  $('<div id="seat-plan">').appendTo('#wrapper')
  seatingPlan(talks[0].seat)

  $('<select>').appendTo('#wrapper')
  talks.forEach((v) => {
    $('<option>').text(v.presenter).appendTo($('select'))
  })

  $('select').change((e) => {
    talks.forEach((v) => {
      if (v.presenter === e.target.value) {
        seatingPlan(v.seat)
      }
    })
  })

  $('<button>').text('Submit').appendTo('#wrapper')
}

module.exports = renderSeats;
