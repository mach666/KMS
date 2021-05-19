const EXPRESS=require('express')
const ROUTER=EXPRESS.Router()
const Ingredients=require('../models/ItemSchema')

ROUTER.post('/samelocation',(req,res)=>{
const LOCATION=req.body.location
Ingredients.find({location:LOCATION})
.then(Res=>{res.send(Res)})
.catch(Err=>{console.log(Err)})
})



module.exports=ROUTER