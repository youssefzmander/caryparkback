let Reservation = require("../models/Reservation")

exports.getReservation = async (req, res) => {

    var reservation;
    if (req.body._id) {
        reservation = await Reservation.findById(req.body._id)
    } else {
        reservation = await Reservation.find()
    }

    res.status(201).send({ reservation , message : "Success" })
}

exports.addReservation = async (req, res) => {
    const { dateEntre , dateSortie, idPlace, idParking } = req.body;

    const newReservation = new Reservation();

    newReservation.dateEntre = dateEntre;
    newReservation.dateSortie = dateSortie;
    newReservation.idPlace = idPlace;
    newReservation.idParking = idParking;
    newReservation.save();

    res.status(201).send({ reservation: "success", reservation: newReservation });
}

exports.editReservation = async (req, res) => {
    const { _id, dateEntre , dateSortie, idPlace, idParking } = req.body;

    let reservation = await Reservation.findOneAndUpdate(
        { _id: _id },
        {
            $set: {
                title : dateEntre,
                title : dateSortie,
                title : idPlace,
                description : idParking
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