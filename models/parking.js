const mongoose = require('mongoose')
const parkingSchema =new mongoose.Schema({
    localisation :{
        type : String,
        required: true,
    },
    nbrPlace:{ 
        type : Number,
        required: true,
    },
    prix : {
        type : Number ,
        required: true,
     },
    disponibilite: {
        type : Boolean,
        required: true,
    },
    id_parking: {
        type : Number,
        required: true,
    },
   

})
module.exports = mongoose.model('parking', parkingSchema)
