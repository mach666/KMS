const EXPRESS=require('express')
const ROUTER=EXPRESS.Router()
const DateCalculator=require('../middleware/DateCalculator')
const Ingredient=require('../models/ItemSchema')




ROUTER.post('/expiresoon',DateCalculator,(req,res)=>{
    const DATE=req.date
    Ingredient.find({expirydate:DATE})
    .then(Res=>{
        res.send(Res)
    }).catch(Err=>{console.log(Err)})
    
})












module.exports=ROUTER