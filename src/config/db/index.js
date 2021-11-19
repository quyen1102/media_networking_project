const mongoose = require('mongoose')

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/shopee')
        console.log('connect db successfully')
    }catch(error){
        console.log('fail conection');
    }
}


module.exports = {connect}