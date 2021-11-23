var express = require('express');
var router = express.Router();
const Conducteur= require('../models/conducteur')

//getting all
router.get('/', async (req,res) =>{
  try {
    const conducteurs= await Conducteur.find()
    res.json(conducteurs)
  }catch(err){
    res.status(500).json({message: err.message})

  }
})
//getting one 
router.get('/', getConducteur,(req, res) => {
  res.json(res.conducteur)
})

//creating one 
router.post('/', async(req,res) => {
const conducteur = new Conducteur({
nom :req.body.nom,
prenom : req.body.prenom,
cin : req.body. cin,
voiture : req.body.voiture,
numero : req.body.numero,
email : req.body.email,
role:req.body.role,
})
try{
  const newConducteur= await conducteur.save()
  res.status(201).json(newConducteur)
}catch (err){
  res.status(400).json({message: err.message})
}
})

//update one 
router.patch('/:id',getConducteur, async(req,res) => {
  if(req.body.nom != null){
    res.conducteur.nom=req.body.nom
  }
  if(req.body.prenom != null){
    res.conducteur.prenom=req.body.prenom 
  }
  if(req.body.cin != null){
    res.conducteur.cin=req.body.cin
  }
  if(req.body.numero != null){
    res.conducteur.numero=req.body.numero
  }
  if(req.body.voiture != null){
    res.conducteur.voiture=req.body.voiture
  }
  if(req.body.email != null){
    res.conducteur.email=req.body.email
  }
  if(req.body.role != null){
    res.conducteur.role=req.body.role
  }

    try{
const updateConducteur= await res.conducteur.save()
res.json(updateConducteur)
    }catch(err){
      res.status(400).json({message: err.message})
    }
  
})

//deleting one
router.delete('/:id',getConducteur, async (req,res) => {
  try{
await res.conducteur.remove()
res.json({message: 'DELETED CONDUCTEUR'})
  }catch(err){
    res.status(500).json({message: err.message})

  }
  
})
//fonction get 
async function getConducteur(req,res,next){
  let conducteur
  try{
conducteur= await Conducteur.findById(req,res,next)
if ( conducteur == null){
  return res.status(404).json({message: ' desole conducteur non trouvable '})
}
  }catch(err){
    return res.status (500).json({message : err.message})

  }
  res.conducteur = conducteur
}

module.exports = router
