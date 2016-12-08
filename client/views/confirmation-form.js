const $ = require('jquery')

var renderConfirmation = function() {

  $('<div id="confirmation-form">').appendTo('#root')

  $('<h1>').text('Thank you! Your payment was processed successfully.').appendTo('#confirmation-form')

  $('<p>').text('A confirmation email for your booking has been emailed to you. There is no need for paper tickets or to print out the confirmation email. Your name will be on the attendee list at the entrance.').appendTo('#confirmation-form')
  $('<p>').text('If you have any comments or questions please do not hesitate to contact us:').appendTo('#confirmation-form')
  $('<p>').text('melbourne@generalassemb.ly').appendTo('#confirmation-form')
  $('<p>').text('(03) 8592 7303').appendTo('#confirmation-form')
  $('<form action="/" class="home">').appendTo('#confirmation-form')
  $('<button>').text('Home').attr('id', 'home-btn').appendTo('.home')

}

module.exports = renderConfirmation
