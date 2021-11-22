const mongoose = require('mongoose')



const Schema = mongoose.Schema

const User = new Schema({
    username : { type : String,  require : true, maxLength : 255, minlength: 4},
    avt: { type : String, default: '../../public/img/avatar/unknow.jpg'},
    age: { type : Number},
    sex: {type : String, default: 'male'},
    
})


module.exports = mongoose.model('User', User)

