const $ = require('jquery')

var renderConfirmation = function() {

  $('<div id="confirmation-form">').appendTo('#root')

  $('<h1>').text('Successful').appendTo('#confirmation-form')

  $('<p>').text('Your payment was successful. Your ticket has been emailed to your email').appendTo('#confirmation-form')

  $('<button>').text('Home').attr('id', 'home-btn').appendTo('#confirmation-form')

}

module.exports = renderConfirmation
