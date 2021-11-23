const mongoose = require('mongoose')
const reservationSchema =new mongoose.Schema({
    date_entre :{
        type : Date,
        required: true,
    },
    date_sorti:{ 
        type : date,
        required: true,
    },
    id_place : {
        type : Number ,
        required: true,
     },
    id_parking: {
        type : Number,
        required: true,
    },
   

})
module.exports = mongoose.model('parking', parkingSchema)
