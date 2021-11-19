const mongoose = require('mongoose')



const Schema = mongoose.Schema

const Product = new Schema({
    item: {type: String , required: true, maxlength: 255,default: 'product'},
    unitPrice: { type: 'number', required: true, maxlength: 20,default: 0 },
    quantity: {  type: 'number', default: 0 },
    orderDate: {type: 'date', default:  Date.now},
    img: { type: 'string', default:''},
    slug: { type: 'string', unique: true}
},{
    timestamps: true,
})




module.exports = mongoose.model('Product', Product)