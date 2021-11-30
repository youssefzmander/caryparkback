const express = require("express");
const router = express.Router();
const ReservationController = require("../controllers/reservation-controller");

router.route("/")
    .get(ReservationController.getReservation)
    .post(ReservationController.addReservation)
    .put(ReservationController.editReservation)
    .delete(ReservationController.deleteReservation);

router.delete("/deleteAllReservations", ReservationController.deleteAllReservations)

module.exports = router;