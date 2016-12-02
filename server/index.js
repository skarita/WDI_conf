const express = require('express')
const app = express()
const path = require('path')
const apiKey = 'f0k6u6nZrDpsrzV_RVdB3I_HVggR4bu4'
const fetch = require('node-fetch')

// Routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/test', function(req, res) {
  fetch('https://api.mlab.com/api/1/databases/wdi_conf/collections/test?apiKey=' + apiKey)
  .then(function(res) {
  return res.json()
}).then(function(json) {
  res.json(json)
})

})
// Start server
app.listen(3030)

// fetch('https://api.mlab.com/api/1/databases/wdi_conf/collections/test?apiKey=' + apiKey, {
//     method: 'POST',
//     body: JSON.stringify( { 'test key' : 'testValue'}),
//     headers: {'Content-Type' : 'application/json'}
// }).then(function(res) {
//   return res.json()
// }).then(function(json) {
//   console.log(json)
// })
