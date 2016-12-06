const $ = require('jquery')

const seatingPlan = (seats) => {
  $('#seat-plan').html('')
  Object.keys(seats).forEach(function(row) {
    var $row = $('<div>')
    Object.keys(seats[row]).forEach(function(seat) {
      var $seat = $('<div class="seat">').data({ row: row, seat: seat })
      if (seats[row][seat] === 'reserved') {
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
  })
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

  var formData = {
    presenter: "Mark Zuckerberg",
    reserved: {}
  }

  $('select').change((e) => {
    if ($('.seat-selected').length > 0) {
      $('.seat-selected').each(function() {
        formData.reserved[`seat.${ $(this).data('row') }.${ $(this).data('seat') }`] = "reserved"
      })
      $.ajax('http://localhost:3030/reserve', {
        method: 'post',
        data: formData
      }).done(function(res) {
        talks.forEach((v) => {
          if (v.presenter === e.target.value) {
            seatingPlan(v.seat)
          }
        })
        formData.presenter = e.target.value
        formData.reserved = {}
      })
    } else {
      talks.forEach((v) => {
        if (v.presenter === e.target.value) {
          seatingPlan(v.seat)
        }
      })
      formData.presenter = e.target.value
      formData.reserved = {}
    }
  })

  $('<button>').text('Submit').appendTo('#wrapper')
}

module.exports = renderSeats;
