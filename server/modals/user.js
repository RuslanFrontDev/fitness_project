const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema;
const UserSchema = new Schema({
   name:{
      type:String,
      required:[true, "Xais olunur alani doldurun"],
      trim:true
   },
   email:{
      type:String,
      required:[true, 'please provide a email'],
      unique:true,
      match:[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g]
   },
   number:{
      type:String,
   },
   about:{
      type:String,
      required:[true, "Xais olunur haqqinizda nese yazin"]

   },
   gender:{
      type:String,
   },
   accept:{
      type:Boolean,

   }
})
UserSchema.methods.generateJWTFromUser=function() {
   const {JWT_SECRET_KEY, JWT_EXPIRE} = process.env;
   const payload = {
      id:this._id,
      name:this.name
   };
   const token = jwt.sign(payload, JWT_SECRET_KEY, {
      expiresIn:JWT_EXPIRE
   })
   return token
}
module.exports=mongoose.model('User', UserSchema)