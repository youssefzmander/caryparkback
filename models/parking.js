const { URITooLong } = require('http-errors')
const mongoose = require('mongoose')
const parkingSchema =new mongoose.Schema({
    adresse :{
        type :String
    },
    longAtitude:Number,
    latatitude:Number,

    nbrPlace:{ 
        type : Number
    },
    prix : {
        type : Number 
     },
   

})
module.exports = mongoose.model('parking', parkingSchema)
