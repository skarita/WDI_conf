const sendConfEmail = function(user_email) {
  var helper = require('sendgrid').mail;
  var from_email = new helper.Email('test@example.com');
  var to_email = new helper.Email(user_email);
  var subject = 'Hello World from the SendGrid Node.js Library!';
  var content = new helper.Content('text/plain', 'Hello, Email!');
  var mail = new helper.Mail(from_email, subject, to_email, content);

  var sendgridKey = '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'
  var sg = require('sendgrid')(sendgridKey);
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  sg.API(request, function(error, response) {
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  });
}

module.exports = sendConfEmail
