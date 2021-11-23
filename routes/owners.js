var express = require('express');
var router = express.Router();
const Onwer= require('../models/owner')

//getting all 
router.get('/', async (req,res) =>{
    try {
      const owners= await Owner.find()
      res.json(owners)
    }catch(err){
      res.status(500).json({message: err.message}) 
    }
  })
//gettin one 
router.get('/:id', getOwners,(req, res) => {
    res.json(res.owner)
  })
//creating one 
router.post('/', async(req,res) => {
    const owner = new Owner({
    nom :req.body.nom,
    prenom : req.body.prenom,
    cin : req.body. cin,
    adresse : req.body.adresse,
    role : req.body.role
    })
    try{
      const newOwner= await owner.save()
      res.status(201).json(newOwner)
    }catch (err){
      res.status(400).json({message: err.message})
    }
    })
// updating one
router.patch('/:id',getOwners, async(req,res) => {
    if(req.body.nom != null){
      res.conducteur.localisation=req.body.localisation
    }
    if(req.body.prenom != null){
      res.conducteur.nbr_place=req.body.nbr_place 
    }
    if(req.body.cin != null){
      res.conducteur.prix=req.body.prix
    }
    if(req.body.adresse != null){
      res.conducteur.disponibilite=req.body.disponibilite
    }
    if(req.body.role != null){
      res.conducteur.role=req.body.role
    }
  
  
      try{
  const updateOwner= await res.owner.save()
  res.json(updateOwner)
      }catch(err){
        res.status(400).json({message: err.message})
      }
    
  })
// deleted one
router.delete('/:id',getOwners, async (req,res) => {
    try{
  await res.owner.remove()
  res.json({message: 'DELETED owner'})
    }catch(err){
      res.status(500).json({message: err.message})
  
    }
    
  })
//fonction get owners
async function getOwners(res,res,next){
    let parking
    try{
  owners= await Owners.findById(req,res,next)
  if ( parking == null){
    return res.status(404).json({message: ' desole parking  non trouvable '})
  }
    }catch(err){
      return res.status (500).json({message : err.message})
  
    }
    res.owner = owner
  
  }
  
  module.exports = router