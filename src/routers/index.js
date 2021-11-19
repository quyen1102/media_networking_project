
const productRouter = require('./product')




function route(app) {
   app.use('/product', productRouter)
}

module.exports = route