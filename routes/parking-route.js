const express = require("express");
const router = express.Router();
const ParkingController = require("../controllers/parking-controller");

router.route("/")
    .get(ParkingController.getParking)
    .post(ParkingController.addParking)
    .put(ParkingController.editParking)
    .delete(ParkingController.deleteParking);

router.delete("/deleteAllParkings", ParkingController.deleteAllParkings)

module.exports = router;