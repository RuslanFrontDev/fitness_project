const sendJwtFromUser = (user, res) => {
//   const { JWT_SECRET_KEY, NODE_ENV } = process.env;
  const token = user.generateJWTFromUser();
  return res.status(200).json({
    success: true,
    access_token: token,
    data: {
      name: user.name,
      email: user.email,
    },
  });
};
// const isTokenToRoute = (req)=>{
//    return req.headers.authorization && req.headers.authorization.startsWith("Bearer")
// }
// const getAccessFromHeader =(req)=>{
//    const authorization = req.headers.authorization;
//    const access_token = authorization.split(" ")[1];

//    return access_token

// }
module.exports = sendJwtFromUser;
