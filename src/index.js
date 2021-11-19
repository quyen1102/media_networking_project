
const path = require('path');
const express = require('express')
const handlebars = require('express-handlebars')


const route = require('./routers')
const db = require('./config/db')

const app = express()
const port = 3000


// connect db 
db.connect()

//static files
app.use(express.static(path.join(__dirname, 'public')))

// template engine
const hbs = handlebars.create({
   extname: 'hbs',

});
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './resources/views'))





// Route init 
route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})