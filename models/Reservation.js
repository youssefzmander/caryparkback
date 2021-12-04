const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema(
    {
        dateEntre: { type: Date },
        dateSortie: { type: Date },

        parking: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Parking"
        }
    },
    {
        timestamps: { currentTime: () => Date.now() },
    }
);

module.exports = mongoose.model("Reservation", ReservationSchema);