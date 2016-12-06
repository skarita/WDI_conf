const mLabKey = require('./secret-sauce').mLabKey
const fetch = require('node-fetch')

const saveToDb = function(name, email) {
  fetch('https://api.mlab.com/api/1/databases/wdi_conf/collections/ticketholder?apiKey=' + mLabKey, {
    method: 'POST',
    body: JSON.stringify( {
      name: name,
      email: email
    }),
  headers: {'Content-Type' : 'application/json'}
  }).then(function(res) {
    return res.json()
  }).then(function(json) {
    console.log(json)
  })
}

module.exports = saveToDb