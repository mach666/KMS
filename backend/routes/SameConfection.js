const EXPRESS=require('express')
const ROUTER=EXPRESS.Router()
const Ingredients=require('../models/ItemSchema')

ROUTER.post('/sameconfection',(req,res)=>{
const CONFECTION=req.body.confection
Ingredients.find({confection:CONFECTION})
.then(Res=>{res.send(Res)})
.catch(Err=>{console.log(Err)})
})



module.exports=ROUTER