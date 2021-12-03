let Parking = require("../models/Parking")

exports.getParkings = async (req, res) => {
    res.status(201).send({ parking: await Parking.find(), message: "Success" })
}

exports.getParkingById = async (req, res) => {
    res.status(201).send({ parking: await Parking.findById(req.body._id), message: "Success" })
}

exports.addParking = async (req, res) => {
    const { adresse, nbrPlace, longitude, latitude, prix } = req.body;

    const newParking = new Parking();

    newParking.adresse = adresse;
    newParking.nbrPlace = nbrPlace;
    newParking.longitude = longitude;
    newParking.latitude = latitude;
    newParking.prix = prix;
    newParking.save();

    res.status(201).send({ parking: "success", parking: newParking });
}

exports.editParking = async (req, res) => {
    const { _id, adresse, nbrPlace, longitude, latitude, prix } = req.body;

    let parking = await Parking.findOneAndUpdate(
        { _id: _id },
        {
            $set: {
                adresse: adresse,
                nbrPlace: nbrPlace,
                longitude: longitude,
                latitude: latitude,
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