const mongoose = require('mongoose');
const connectDatabase = ()=>{
mongoose.connect(process.env.Mongo_URL)
.then(()=>{
   console.log("Mongoose Successfull")
})
.catch(err=>{console.log(err)})

}
module.exports=connectDatabase