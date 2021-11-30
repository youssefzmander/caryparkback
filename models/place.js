const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
    idParking: { type: String },
    userId: { type: String },
    bloc: { type: String },
    disponibilite: { type: String }
});

module.exports = mongoose.model("Place", PlaceSchema);