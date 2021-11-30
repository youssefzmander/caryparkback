const express = require("express");
const router = express.Router();
const PlaceController = require("../controllers/place-controller");

router.route("/")
    .get(PlaceController.getPlace)
    .post(PlaceController.addPlace)
    .put(PlaceController.editPlace)
    .delete(PlaceController.deletePlace);

router.delete("/deleteAllPlaces", PlaceController.deleteAllPlaces)

module.exports = router;