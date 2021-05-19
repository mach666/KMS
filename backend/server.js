const EXPRESS=require('express')
const APP=EXPRESS()
const MONGOOSE=require('mongoose')
const cors=require('cors')
require('dotenv').config()
const PORT=process.env.PORT

MONGOOSE.connect(process.env.MONGO_URL,{useUnifiedTopology: true,useNewUrlParser: true ,useFindAndModify:false})
.then(Res=>{
    console.log(">>>>....DATABASE CONNECTED....<<<<")
   //console.log(Res)
}).catch(Err=>{console.log(Err)})

APP.use(EXPRESS.json())
APP.use(cors())

APP.use('/kitchen',require('./routes/EnterIngredient'))
APP.use('/kitchen',require('./routes/WillExpireIn'))
APP.use('/kitchen',require('./routes/RecentAdded'))
APP.use('/kitchen',require('./routes/SameCategory'))
APP.use('/kitchen',require('./routes/SameConfection'))
APP.use('/kitchen',require('./routes/SameLocation'))
APP.use('/kitchen',require('./routes/FetchIngredients'))
APP.use('/kitchen',require('./routes/updateDetails'))


APP.listen(PORT,()=>{
    console.log(`.....Server is up at port:${PORT}.....`)
})