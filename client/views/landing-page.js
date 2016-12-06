const $ = require('jquery')
const renderPaymentForm = require('./payment-form.js')
const renderHomeSection = require('./home-section.js')
const renderSpeakerSection = require('./speaker-section.js')

var renderLandingPage = function() {

  renderHomeSection();

  renderSpeakerSection();

  $('.buy-ticket-btn, #fourth').click(function() {

    $('<div id="modal-wrapper" class="modal">').appendTo('#root');
    $('<div id="payment-form-modal" class="modal">').appendTo('#modal-wrapper');
      renderPaymentForm()
  })

}

module.exports = renderLandingPage
