var express = require('express');
var router = express.Router();
const Compte= require('../models/compte')
//getting all 
router.get('/', async (req,res) =>{
    try {
      const comptes= await compte.find()
      res.json(comptes)
    }catch(err){
      res.status(500).json({message: err.message}) 
    }
  })
//getting one 
router.get('/',getComptes,(req, res) => {
    res.json(res.compte)
  })
// creating one 
router.post('/', async(req,res) => {
    const compte = new Compte ({
      login :req.body.login,
      password : req.body.password

    })
    try{
      const newCompte= await compte.save()
      res.status(201).json(newCompte)
    }catch (err){
      res.status(400).json({message: err.message})
    }
    })
// update one 
router.patch('/',getComptes, async(req,res) => {
    if(req.body.login != null){
      res.conducteur.login=req.body.login
    }
    if(req.body.password != null){
      res.conducteur.password=req.body.password 
    }
      try{
  const updateCompte= await res.compte.save()
  res.json(updateCompte)
      }catch(err){
        res.status(400).json({message: err.message})
      }
    
  })
  
// delete one 
router.delete('/',getComptes, async (req,res) => {
    try{
  await res.compte.remove()
  res.json({message: 'compte supprimé'})
    }catch(err){
      res.status(500).json({message: err.message})
  
    }
    
  })
//fonction getComptes
async function getComptes(res,res,next){
    let owner
    try{
  compte= await Compte.findById(req,res,next)
  if ( compte == null){
    return res.status(404).json({message: ' desole compte  non trouvable '})
  }
    }catch(err){
      return res.status (500).json({message : err.message})
  
    }
    res.compte = compte
  
  }
module.exports = router