const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
    dateEntre: { type: String },
    dateSortie: { type: String },
    idPlace: { type: Number },
    idParking: { type: Number }
});

module.exports = mongoose.model("Reservation", ReservationSchema);