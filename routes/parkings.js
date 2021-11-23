var express = require('express');
var router = express.Router();
const Parking= require('../models/parking')

//getting all
router.get('/', async (req, res)=>{
  try{
    const parkings = await parking.find()
    res.json(parkings)
  }catch(err){
    res.status(500).json({message: err.message})
  }
})
//getting one
router.get('/', getParking, (req, res) => {
  res.json(res.parking)
})

//creating one 
router.post('/', async(req,res) => {
  const parking = new Parking({
  localisation :req.body.localisation,
  nbrplace : req.body.nbrplace,
  prix : req.body.prix,
  disponibilite : req.body.disponibilite
  })
  try{
    const newParking= await parking.save()
    res.status(201).json(newParking)
  }catch (err){
    res.status(400).json({message: err.message})
  }
  })
  

//updates one 
router.patch('/:id',getParking, async(req,res) => {
  if(req.body.localisation != null){
    res.conducteur.localisation=req.body.localisation
  }
  if(req.body.nbr_place != null){
    res.conducteur.nbr_place=req.body.nbr_place 
  }
  if(req.body.prix != null){
    res.conducteur.prix=req.body.prix
  }
  if(req.body.disponibilite != null){
    res.conducteur.disponibilite=req.body.disponibilite
  }
  if(req.body.id_parking != null){
    res.conducteur.id_parking=req.body.id_parking
  }


    try{
const updateParking= await res.parking.save()
res.json(updateParking)
    }catch(err){
      res.status(400).json({message: err.message})
    }
  
})
//delete one
router.delete('/:id',getParking, async (req,res) => {
  try{
await res.parking.remove()
res.json({message: 'DELETED parking'})
  }catch(err){
    res.status(500).json({message: err.message})

  }
  
})
//fonction get parkings
async function getParking(res,res,next){
  let parking
  try{
parking= await Parking.findById(req,res,next)
if ( parking == null){
  return res.status(404).json({message: ' desole parking  non trouvable '})
}
  }catch(err){
    return res.status (500).json({message : err.message})

  }
  res.parkking = parking

}

module.exports = router
