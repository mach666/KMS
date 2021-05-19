const EXPRESS=require('express')
const ROUTER=EXPRESS.Router()
const Ingredient=require('../models/ItemSchema')
const timestamp=require('time-stamp')
const DateCalculator=require('../middleware/DateCalculator')


ROUTER.post('/enterIngredient',(req,res)=>{
    const entrydate=timestamp('YYYY/MM/DD')
    const { name, category, location, confection, expirydate}=req.body

    const INGREDIENT= new Ingredient({
        name:name,category:category,location:location,confection:confection,expirydate:expirydate,entrydate:entrydate
    })

    INGREDIENT.save()
    .then(Res=>{res.send(Res)})
    .catch(Err=>{console.log(Err)})
    
}) 

ROUTER.post('/enterIngredientwithdays',DateCalculator,(req,res)=>{
    const entrydate=timestamp('YYYY/MM/DD')
    const ExpiryDate=req.date
    const { name, category, location, confection}=req.body

    const INGREDIENT= new Ingredient({
        name:name,category:category,location:location,confection:confection,expirydate:ExpiryDate,entrydate:entrydate
    })

    INGREDIENT.save()
    .then(Res=>{res.send(Res)})
    .catch(Err=>{console.log(Err)})
    
}) 









module.exports=ROUTER