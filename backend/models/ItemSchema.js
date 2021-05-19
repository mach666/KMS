const MONGOOSE=require('mongoose')
const schema=MONGOOSE.Schema

const IngredientSchema=new schema({
    name:{type:String,required:true,trim:true},
    category:{type:String,enum:['fruit', 'vegetable', 'dairy', 'fish', 'meat', 'liquid','' ],default:''},
    location:{type:String,enum:['pantry','fridge','freezer',''],default:''},
    confection:{type:String,enum:['fresh','canned','frozen','cured',''],default:''},
    expirydate:{type:String,trim:true,default:''},
    entrydate:{type:String}

})

module.exports=Ingredient=MONGOOSE.model('Ingredient',IngredientSchema)


