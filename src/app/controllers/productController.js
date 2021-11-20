const Product = require('../models/Product')
const { multipleObjMoongose } = require('../../util/mongoose')
class ProductController {
    show(req, res, next) {
        Product.find({})
        .then(product =>{
            res.render('shop-cart/store', {
                product: multipleObjMoongose(product)
            })
        })
        .catch(next)
    }
}

module.exports = new ProductController // us class thì phải thêm new