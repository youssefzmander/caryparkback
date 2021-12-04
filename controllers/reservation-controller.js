const Parking = require("../models/Parking");
const Reservation = require("../models/Reservation")

exports.getAllReservations = async (req, res) => {
    const reservations = await Reservation.find().populate({ path: "parking" }).select("-reservations.reservation");

    if (reservations) {
        res.status(200).send({ reservations, message: "success" });
    } else {
        res.status(403).send({ message: "fail" });
    }
};


exports.getReservation = async (req, res) => {

    var reservation;
    if (req.body._id) {
        reservation = await Reservation.findById(req.body._id)
    } else {
        reservation = await Reservation.find()
    }

    res.status(201).send({ reservation, message: "Success" })
}

exports.addReservation = async (req, res) => {
    const { dateEntre, dateSortie, parking } = req.body;
    console.log(req.body)

    const newReservation = new Reservation();

    newReservation.dateEntre = dateEntre;
    newReservation.dateSortie = dateSortie;
    newReservation.parking = parking;

    await Parking.findOneAndUpdate(
        { _id: parking },
        {
            $push: {
                reservations: [newReservation._id]
            }
        }
    );

    newReservation.save()

    res.status(201).send({ message: "success", reservation: newReservation });
}

exports.editReservation = async (req, res) => {
    const { _id, dateEntre, dateSortie, parking } = req.body;

    let reservation = await Reservation.findOneAndUpdate(
        { _id: _id },
        {
            $set: {
                title: dateEntre,
                title: dateSortie,
                //description: parking
            }
        }
    );

    res.status(201).send({ reservation: "success", reservation: reservation });
};

exports.deleteReservation = async (req, res) => {
    const reservation = await Reservation.findById(req.body._id).remove()
    res.status(201).send({ reservation: "success", reservation: reservation });
}

exports.deleteAllReservations = async (req, res) => {
    Reservation.remove({}, function (err, reservation) {
        if (err) { return handleError(res, err); }
        return res.status(204).send({ reservation: "No data" });
    })
}