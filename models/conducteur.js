const mongoose = require('mongoose')

const conducteurSchema =new mongoose.Schema({
    nom :{
        type : String,
        required: true,
    },
    prenom:{ 
        type : String,
        required: true,
    },
    cin : {
        type : Number ,
        required: true,
     },
    voiture: {
        type : String,
        required: true,
    },
    numero:{
        type : Number,
        default: true,
     },
    email : {
        type : String,
        default: true,
    },
    role:{
        type:String,
        default:true,
    }

})
module.exports = mongoose.model('conducteur',conducteurSchema)