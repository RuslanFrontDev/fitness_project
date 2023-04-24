const CustomError = require('../../helpers/error/CustomError')
const customErrorHandler = (err, req, res, next)=>{
   let customError = err;
   if(err.name === "ValidationError"){
      customError = new CustomError(err.message, 400)
   }
   if(err.code === 11000){
      customError = new CustomError('Dublicate Email', 400)
   }
   res.status(customError.status || 500).json({
      success:false,
      message:customError.message || "Interval Server Error"
   })
}
module.exports = customErrorHandler