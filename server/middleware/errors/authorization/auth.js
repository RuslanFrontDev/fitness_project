// const { isTokenToRoute, getAccessFromHeader } = require("../../../helpers/authorization/sendJwtFromUser");
// const CustomError = require("../../../helpers/error/CustomError");
// const jwt = require("jsonwebtoken");
// const getAccessToRoute = (req, res, next) => {
//   const { JWT_SECRET_KEY } = process.env;
//   if (isTokenToRoute(req)) {
//     return (
//       next(
//         new CustomError("siz bu sehifeye yalniz giriz ederken gore bilersiniz"),
//         401
//       ),
//       next()
//     );
//   }

//   const accesToken = getAccessFromHeader(req);
//   jwt.verify(accesToken, JWT_SECRET_KEY, (err, decoded) => {
//     if (err) {
//       return next(
//         new CustomError("siz bu sehifeye yalniz giriz ederken gore bilersiniz"),
//         401
//       );
//     }
//     console.log(decoded),
//     next()
//   });
// };
// module.exports = getAccessToRoute;
