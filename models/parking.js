const mongoose = require("mongoose");

const ParkingSchema = new mongoose.Schema(
    {
        adresse: { type: String },
        nbrPlace: { type: Number },
        longitude: { type: Number },
        latitude: { type: Number },
        prix: { type: Number }
    },
    {
        timestamps: { currentTime: () => Date.now() },
    }
);

module.exports = mongoose.model("Parking", ParkingSchema);