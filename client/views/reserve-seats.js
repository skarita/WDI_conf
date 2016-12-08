const $ = require('jquery')
const fullNames = require('./../scripts/full-names.js')
const renderConfirmationForm = require('./confirmation-form')

const seatingPlan = (talk, qty) => {
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
          if ($(`#${presenter}-seats .seat-selected`).length < qty) {
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

const renderSeats = function(talks, qty) {
  $('<div id="wrapper" class="modal">').appendTo('#payment-form-modal');
  $('<span class="close-btn">').text('✘').appendTo('#wrapper')
  $('<div id="seat-reserve-wrapper">').appendTo('#wrapper')
  $('<h5>').text('Payment Sucessful').appendTo('#seat-reserve-wrapper');
  $('<p>').text('Would you like to reserve seating?').appendTo('#seat-reserve-wrapper');
  $('<button id="skip-btn">').text('Skip').appendTo('#seat-reserve-wrapper');
  $('<div id="stage-div">').text('stage').appendTo('#seat-reserve-wrapper');

  $('<div id="seat-plan">').appendTo('#seat-reserve-wrapper')
  talks.forEach((v) => seatingPlan(v, qty))
  $('#zuckerberg-seats').toggle()

  $('<div>').text('Choose your speaker:').appendTo('#seat-reserve-wrapper')
  $('<select>').appendTo('#seat-reserve-wrapper')
  talks.forEach((v) => {
    $('<option>').text(v.presenter).appendTo($('select'))
  })

  $('select').change((e) => {
    const presenter = e.target.value.split(' ')[e.target.value.split(' ').length -1].toLowerCase()
    $('.plan').hide()
    $(`#${presenter}-seats`).show()
  })

  var formData = {}

  $('<button id="submit-reservation">').text('Submit').appendTo('#seat-reserve-wrapper')
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
    $.ajax('http://localhost:3030/reserve', {
      method: 'post',
      data: formData
    }).done(function(res) {
      console.log(res)
    })
    $('#payment-form-modal').remove();
    renderConfirmationForm();
  })

  $('#skip-btn').click(function() {
    // first remove modal background
    $('#payment-form-modal').remove();
    renderConfirmationForm();
  });

  $('.close-btn').click(function() {

    $('#modal-wrapper').remove();

  });
}

module.exports = renderSeats;
