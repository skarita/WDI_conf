const $ = require('jquery')
const renderConfirmation = require('./../views/confirmation-form')

var stripeResponseHandler = function (status, response) {

  console.log('stripe received');

  console.log(status);
  console.log(response);

  // Grab the form:
  var $form = $('#payment-stripe-form');

  if (response.error) { // Problem!

    // Show the errors on the form:
    $('.payment-errors').text(response.error.message);
    $form.find('.submit').prop('disabled', false); // Re-enable submission

  } else { // Token was created!
    console.log('token created');
    // Get the token ID:
    var token = response.id;

    console.log(token);

    // Insert the token ID into the form so it gets submitted to the server:
    $form.append($('<input type="hidden" name="stripeToken">').val(token));

    // Submit the form:
    // $form.get(0).submit();

    var formData = {
      stripeToken: token,
      name: $('input[name="name"]').val(),
      email: $('input[name="email"]').val()
    }

    console.log(formData)

    $.ajax('http://localhost:3030/pay', {
      method: 'post',
      data: formData
    }).done(function(res) {
      console.log(res)
      $('#root').html('')
      renderConfirmation()
    })

  }
};

module.exports = stripeResponseHandler
