const $ = require('jquery')
const fullNames = require('./../scripts/full-names.js')

const seatingPlan = (talk) => {
  const presenter = talk.presenter.split(' ')[talk.presenter.split(' ').length - 1].toLowerCase()
  var $plan = $('<div>').attr('id', presenter + '-seats').addClass('plan').appendTo('#seat-plan').toggle()
  Object.keys(talk.seat).forEach(function(row) {
    var $row = $('<div>')
    Object.keys(talk.seat[row]).forEach(function(seat) {
      var $seat = $('<div class="seat">').data({ row: row, seat: seat })
      if (talk.seat[row][seat] === 'reserved') {
        $seat.addClass('reserved')
      } else {
        $seat.click(function() {
          if ($(`#${presenter}-seats .seat-selected`).length < 1) {
            $seat.toggleClass('seat-selected')
          } else {
            $seat.removeClass('seat-selected')
          }
        })
      }
      $seat.appendTo($row)
    })
    $row.appendTo($plan)
  })
}

const renderSeats = function(talks) {
  $('<div id="wrapper" class="modal">').appendTo('#payment-form-modal');
  $('<h5>').text('Payment Sucessful').appendTo('#wrapper');
  $('<p>').text('Would you like to reserve seating?').appendTo('#wrapper');
  $('<button>').text('Skip').appendTo('#wrapper');
  $('<div>').text('stage').appendTo('#wrapper');

  $('<div id="seat-plan">').appendTo('#wrapper')
  talks.forEach((v) => seatingPlan(v))
  $('#zuckerberg-seats').toggle()

  $('<select>').appendTo('#wrapper')
  talks.forEach((v) => {
    $('<option>').text(v.presenter).appendTo($('select'))
  })

  $('select').change((e) => {
    const presenter = e.target.value.split(' ')[e.target.value.split(' ').length -1].toLowerCase()
    $('.plan').hide()
    $(`#${presenter}-seats`).show()

  //   if ($('.seat-selected').length > 0) {
  //     $('.seat-selected').each(function() {
  //       formData.reserved[`seat.${ $(this).data('row') }.${ $(this).data('seat') }`] = "reserved"
  //     })
  //     $.ajax('http://localhost:3030/reserve', {
  //       method: 'post',
  //       data: formData
  //     }).done(function(res) {
  //       talks.forEach((v) => {
  //         if (v.presenter === e.target.value) {
  //           seatingPlan(v.seat)
  //         }
  //       })
  //       formData.presenter = e.target.value
  //       formData.reserved = {}
  //     })
  //   } else {
  //     talks.forEach((v) => {
  //       if (v.presenter === e.target.value) {
  //         seatingPlan(v.seat)
  //       }
  //     })
  //     formData.presenter = e.target.value
  //     formData.reserved = {}
  //   }
  })

  var formData = {}

  $('<button id="submit-reservation">').text('Submit').appendTo('#wrapper')
  $('#submit-reservation').click(function() {
    $('.plan').each(function(index, plan) {
      if ($(plan).find('.seat-selected').length > 0) {
        var name = plan.getAttribute('id')
        name = fullNames[name.slice(0, name.length - 6)]
        formData[name] = []
        $(plan).find('.seat-selected').each(function() {
          formData[name].push(`seat.${ $(this).data('row') }.${ $(this).data('seat') }`)
        })
      }
    })
    $.ajax('http://localhost:3030/testupdate', {
      method: 'post',
      data: formData
    }).done(function(res) {
      console.log(res)
    })
  })
}

module.exports = renderSeats;
