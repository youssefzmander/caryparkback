var express = require('express');
var router = express.Router();
const Reservation= require('../models/reservations')
//getting all
router.get('/', async (req,res) =>{
  try {
    const reservation= await Reservation.find()
    res.json(reservation)
  }catch(err){
    res.status(500).json({message: err.message})

  }
})
//getting one 
router.get('/', getReservation,(req, res) => {
  res.json(res.reservation)
})

//creating one 
router.post('/', async(req,res) => {
const reservation = new Reservation({
date_entre :req.body.date_entre,
date_sorti : req.body.date_sorti,
id_place : req.body. id_place,
id_parking : req.body.id_parking,

})
try{
  const newReservation= await reservation.save()
  res.status(201).json(newReservation)
}catch (err){
  res.status(400).json({message: err.message})
}
})

//update one 
router.patch('/:id',getReservation, async(req,res) => {
  if(req.body.date_entre != null){
    res.conducteur.date_entre=req.body.date_entre
  }
  if(req.body.date_sorti != null){
    res.conducteur.date_sorti=req.body.date_sorti 
  }
  if(req.body.id_parking != null){
    res.conducteur.id_parking=req.body.id_parking
  }
  if(req.body.id_place != null){
    res.conducteur.id_place=req.body.id_place
  }
 

    try{
const updateConducteur= await res.conducteur.save()
res.json(updateConducteur)
    }catch(err){
      res.status(400).json({message: err.message})
    }
  
})

//deleting one
router.delete('/:id',getReservation, async (req,res) => {
  try{
await res.reservation.remove()
res.json({message: 'DELETED reservation'})
  }catch(err){
    res.status(500).json({message: err.message})

  }
  
})
//fonction get 
async function getReservation(req,res,next){
  let conducteur
  try{
reservation= await Reservation.findById(req,res,next)
if ( reservation == null){
  return res.status(404).json({message: ' desole reservation non trouvable '})
}
  }catch(err){
    return res.status (500).json({message : err.message})

  }
  res.reservation = reservation
}

module.exports = router
