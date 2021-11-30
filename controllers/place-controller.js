let Place = require("../models/Place")

exports.getPlace = async (req, res) => {

    var place;
    if (req.body._id) {
        place = await Place.findById(req.body._id)
    } else {
        place = await Place.find()
    }

    res.status(201).send({ place , message : "Success" })
}

exports.addPlace = async (req, res) => {
    const { idParking , userId, bloc, disponibilite } = req.body;

    const newPlace = new Place();
    
    newPlace.idParking = id_parking
    newPlace.userId = userId
    newPlace.bloc = bloc
    newPlace.disponibilite = disponibilite
    newPlace.save();

    res.status(201).send({ place: "success", place: newPlace });
}

exports.editPlace = async (req, res) => {
    const { _id, idParking , userId, bloc, disponibilite } = req.body;

    let place = await Place.findOneAndUpdate(
        { _id: _id },
        {
            $set: {
                idParking : idParking,
                userId : userId,
                bloc : bloc,
                disponibilite : disponibilite
            }
        }
    );

    res.status(201).send({ place: "success", place: place });
};

exports.deletePlace = async (req, res) => {
    const place = await Place.findById(req.body._id).remove()
    res.status(201).send({ place: "success", place: place });
}

exports.deleteAllPlaces = async (req, res) => {
    Place.remove({}, function (err, place) {
        if (err) { return handleError(res, err); }
        return res.status(204).send({ place: "No data" });
    })
}