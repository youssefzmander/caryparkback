const mongoose = require('mongoose')

const ownerSchema =new mongoose.Schema({
    nom :{
        type : String,
        required: true,
    },
   prenom:{ 
        type : String,
        default: true,
    },
    cin : {
        type : Number ,
        default: true,
     },
    adresse: {
        type : String,
        required: true,
    },
    role: {
        type : String,
        require:true,
    }
   

})
module.exports = mongoose.model('owner', ownerSchema)
