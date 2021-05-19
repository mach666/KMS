const EXPRESS=require('express')
const ROUTER=EXPRESS.Router()
const Ingredients=require('../models/ItemSchema')

ROUTER.post('/samecategory',(req,res)=>{
const CATEGORY=req.body.category
Ingredients.find({category:CATEGORY})
.then(Res=>{res.send(Res)})
.catch(Err=>{console.log(Err)})
})



module.exports=ROUTER