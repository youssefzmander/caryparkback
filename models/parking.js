const mongoose = require("mongoose");

const ParkingSchema = new mongoose.Schema({
    adresse: { type: String },
    nbrPlace: { type: Number },
    longAtitude: { type: Number },
    latatitude: { type: Number },
    prix: { type: Number }
});

module.exports = mongoose.model("Parking", ParkingSchema);