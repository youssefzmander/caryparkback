const mongoose = require('mongoose')

const place = new mongoose.Schema({
    id_parking: {
        type: String,
    },
    UserId: {
        type: String,
    },
    Bloc:{
        type: String,
    },
    disponibilite: {
        type : Boolean,
        required: true,
    },
})
module.exports = mongoose.model('place', place)

