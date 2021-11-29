require ('dotenv').config();
const express = require ('express');
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json());





app.get('/login', authenticateToken ,(req,res)=> {
res.json(post.filter(post => post.username == req.user.name) )
})

app.post('/login',(req,res)=> {
    //authenticate User
    const username = req.body.username
    const user={name : username }
    const accessToken = jwt.sign(user.process.env.ACESS_TOKEN_SECRET)
    res.json({accessToken : accessToken})
    })
function authenticateToken(req, res, nex){
   const authHeader= req.headers['authorization']
   const token =authHeader && authHeader.split('')[1] 
   if(token ==null) return res.sendStatus(401)

   jwt.verify(token,process.env.ACCES_TOKEN_SECRET,(err, user)=>{
       if (err)return res.sendStatus(403)
       req.user= user 
       next( )
   })
}
app.listen(3000)