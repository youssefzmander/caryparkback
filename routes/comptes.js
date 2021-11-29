var express = require('express');
var router = express.Router();
const Compte = require('../models/compte');



//getting all
router.get('/', async (req,res) =>{
  try {
    const compte= await Comppte.find()
    res.json(compte)
  }catch(err){
    res.status(500).json({message: err.message})

  }
})
//getting one 
router.get('/', getCompte,(req, res) => {
  res.json(res.compte)
})

//creating one 
router.post('/', async(req,res) => {
const compte = new Compte({
nom :req.body.nom,
prenom : req.body.prenom,
cin : req.body. cin,
voiture : req.body.voiture,
numero : req.body.numero,
email : req.body.email,
role:req.body.role,
password:req.body.password,
adresse: req.body.adresse,

})
try{
  const newCompte= await compte.save()
  res.status(201).json(newCompte)
}catch (err){
  res.status(400).json({message: err.message})
}
})

//update one 
router.patch('/:id',getCompte, async(req,res) => {
  if(req.body.nom != null){
    res.compte.nom=req.body.nom
  }
  if(req.body.prenom != null){
    res.compte.prenom=req.body.prenom 
  }
  if(req.body.cin != null){
    res.compte.cin=req.body.cin
  }
  if(req.body.numero != null){
    res.compte.numero=req.body.numero
  }
  if(req.body.voiture != null){
    res.compte.voiture=req.body.voiture
  }
  if(req.body.email != null){
    res.compte.email=req.body.email
  }
  if(req.body.role != null){
    res.compte.role=req.body.role
  }
  if(req.body.password != null){
    res.compte.pw=req.body.password
  }
  if(req.body.adresse != null){
    res.compte.adresse=req.body.adresse
  }

  
  

    try{
const updateConducteur= await res.conducteur.save()
res.json(updateConducteur)
    }catch(err){
      res.status(400).json({message: err.message})
    }
  
})

//deleting one
router.delete('/:id',getCompte, async (req,res) => {
  try{
await res.compte.remove()
res.json({message: 'DELETED CONDUCTEUR'})
  }catch(err){
    res.status(500).json({message: err.message})

  }
  
})
//fonction get 
async function getCompte(req,res,next){
  let compte
  try{
compte = await compte.findById(req.params.id)
if ( compte == null){
  return res.status(404).json({message: ' desole conducteur non trouvable '})
}
  }catch(err){
    return res.status (500).json({message : err.message})

  }
  res.compte = compte
  next();
}

module.exports = router
