
const path = require('path');
const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const port = 3000

//static files
app.use(express.static(path.join(__dirname, 'public')))

// template engine
const hbs = handlebars.create({
   extname: 'hbs',

});
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './resources/views'))


app.get('/', (req, res) => {
  res.render('home')
})
app.get('/cart', (req, res) => {
  res.render('shop-cart/product')
})
app.get('/store-product', (req, res) => {
  res.render('shop-cart/store')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})