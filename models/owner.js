const mongoose = require('mongoose')

const ownerSchema =new mongoose.Schema({
    nom :{
        type : String,
        required: true,
    },
   prenom:{ 
        type : String,
        require:true,
    },
    cin : {
        type : Number ,
        require:true,
     },
    adresse: {
        type : String,
        required: true,
    },
    role: {
        type : String,
        require:true,
    },
   

})
module.exports = mongoose.model('owner', ownerSchema)
