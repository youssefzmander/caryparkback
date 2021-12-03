const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema(
    {
        bloc: { type: String },
        disponibilite: { type: Boolean },

        idParking: { type: String },
        idUser: { type: String }
    },
    {
        timestamps: { currentTime: () => Date.now() },
    }
);

module.exports = mongoose.model("Place", PlaceSchema);