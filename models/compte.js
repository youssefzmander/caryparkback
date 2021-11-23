const mongoose = require('mongoose')

const compteSchema =new mongoose.Schema({
    login:{
        type : String,
        required: true,
    },
   password:{ 
        type : String,
        required: true,
    },
})
module.exports = mongoose.model('compte',compteSchema)