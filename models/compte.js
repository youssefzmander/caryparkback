const mongoose = require('mongoose')

const compte = new mongoose.Schema({
    nom: {
        type: String,
    },
    prenom: {
        type: String,
    },
    cin: {
        type: Number,
        required: true,
    },
    voiture: {
        type: String
    },
    numero: {
        type: Number
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    adresse: {
        type : String    },
    role: {
        type : String    },

})
module.exports = mongoose.model('compte', compte)