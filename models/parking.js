const mongoose = require("mongoose");
const Reservation = require("./Reservation");

const ParkingSchema = new mongoose.Schema(
    {
        adresse: { type: String },
        nbrPlace: { type: Number },
        longitude: { type: Number },
        latitude: { type: Number },
        prix: { type: Number },

        reservations: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reservation'
        }]
    },
    {
        timestamps: { currentTime: () => Date.now() },
    }
);

module.exports = mongoose.model("Parking", ParkingSchema);