const EXPRESS=require('express')
const ROUTER=EXPRESS.Router()
const Ingredients=require('../models/ItemSchema')

ROUTER.post('/fetchIngredients',(req,res)=>{
    Ingredients.find({})
    .then(Res=>{res.send(Res)}).catch(Err=>{console.log(Err)})
})

module.exports=ROUTER