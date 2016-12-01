const express = require('express')
const app = express()

// Settings
app.set('view engine', 'ejs')

// Middleware
app.use(express.static('public'))

// Routes
app.get('/', function(req, res) {
  res.render('index')
})

// Start server
app.listen(3030)