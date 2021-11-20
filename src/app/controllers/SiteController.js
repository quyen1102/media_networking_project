const Product = require('../models/Product')
const {  multipleObjMoongose } = require('../../util/mongoose')

class SiteController {
    index(req , res , next) {
        Product.find({})
            .then(product => {
                res.render('home', {
                     product: multipleObjMoongose(product) 
                    })
            })
    }
}

module.exports = new SiteController