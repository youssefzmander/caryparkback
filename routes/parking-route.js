const express = require("express");
const router = express.Router();
const ParkingController = require("../controllers/parking-controller");

router.route("/")
    .get(ParkingController.getParkings)
    .post(ParkingController.addParking)
    .put(ParkingController.editParking)
    .delete(ParkingController.deleteParking);

router.post("/with-id", ParkingController.getParkingById)
router.post("/by-id-user", ParkingController.getParkingByUserId)
router.delete("/deleteAllParkings", ParkingController.deleteAllParkings)

module.exports = router;