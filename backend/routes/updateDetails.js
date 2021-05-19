const EXPRESS=require('express')
const ROUTER=EXPRESS.Router()
const Ingredient=require('../models/ItemSchema')


ROUTER.post('/updatedetails',(req,res)=>{
    const {id,name,location,category,confection,entrydate,expirydate}=req.body
    Ingredient.findByIdAndUpdate(id,{
        name:name,
        location:location,
        category:category,
        confection:confection,
        entrydate:entrydate,
        expirydate:expirydate
    },{returnOriginal:false})
    .then(Res=>res.send(Res))
    .catch(Err=>console.log(Err))
})

module.exports=ROUTER