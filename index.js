const app = require('express')()

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('index')
})

app.listen(3030)