const datetime=require('node-datetime')
const timeStamp=require('time-stamp');
function DateCalculator(req,res,next){
const days=req.body.days
const daysInMS=1000*3600*24*days



    //here we are getting the current date in the constant activationDate through timeStamp
    const todayDate=timeStamp('YYYY/MM/DD')


    //here we are creating the current timestamp of activationDate and storing it in constant
    const todayDateTimeStamp = datetime.create(todayDate); 


//here we are converting the activationDateCurrentTimeStamp in milliseconds
    const todayDateTimeStampInMS = todayDateTimeStamp.now();


    //validity date in milliseconds
    const destDateInMS=todayDateTimeStampInMS+daysInMS


    //getting the timestamp of validity date
    const destDateTimeStamp=datetime.create(destDateInMS)


    //converting the validity date in displayable form
    const destDate=destDateTimeStamp.format('Y/m/d')
    
    

    req.date=destDate
    next()

}
module.exports=DateCalculator



