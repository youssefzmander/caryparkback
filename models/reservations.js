const mongoose = require('mongoose')
const reservationSchema =new mongoose.Schema({
    date_entre :{
        type : String,
       
    },
    date_sorti:{ 
        type : String,
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
module.exports = mongoose.model('reservation', reservationSchema)
