let Parking = require("../models/Parking")

exports.getParking = async (req, res) => {

    var parking;
    if (req.body._id) {
        parking = await Parking.findById(req.body._id)
    } else {
        parking = await Parking.find()
    }

    res.status(201).send({ parking, message: "Success" })
}

exports.addParking = async (req, res) => {
    const { adresse, nbrPlace, longAtitude, latatitude, prix } = req.body;

    const newParking = new Parking();

    newParking.adresse = adresse;
    newParking.nbrPlace = nbrPlace;
    newParking.longAtitude = longAtitude;
    newParking.latatitude = latatitude;
    newParking.prix = prix;
    newParking.save();

    res.status(201).send({ parking: "success", parking: newParking });
}

exports.editParking = async (req, res) => {
    const { _id, adresse, nbrPlace, longAtitude, latatitude, prix } = req.body;

    let parking = await Parking.findOneAndUpdate(
        { _id: _id },
        {
            $set: {
                adresse: adresse,
                nbrPlace: nbrPlace,
                longAtitude: longAtitude,
                latatitude: latatitude,
                prix: prix
            }
        }
    );

    res.status(201).send({ parking: "success", parking: parking });
};

exports.deleteParking = async (req, res) => {
    const parking = await Parking.findById(req.body._id).remove()
    res.status(201).send({ parking: "success", parking: parking });
}

exports.deleteAllParkings = async (req, res) => {
    Parking.remove({}, function (err, parking) {
        if (err) { return handleError(res, err); }
        return res.status(204).send({ parking: "No data" });
    })
}