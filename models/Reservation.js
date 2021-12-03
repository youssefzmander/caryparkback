const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema(
    {
        dateEntre: { type: Date },
        dateSortie: { type: Date },

        idPlace: { type: String },
        idParking: { type: String }

    },
    {
        timestamps: { currentTime: () => Date.now() },
    }
);

module.exports = mongoose.model("Reservation", ReservationSchema);