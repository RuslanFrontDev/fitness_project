const User = require("../../modals/user");
const asyncErrorWrapper = require("express-async-handler");
const sendJwtFromUser = require('../../helpers/authorization/sendJwtFromUser')
const register = asyncErrorWrapper(async (req, res, next) => {
  const {name, email, number, about,gender, accept} = req.body
  const user = await User.create({
    name,
    email,
    number,
    about,
    gender,
    accept,
  });
  sendJwtFromUser(user,res)
})
module.exports = { register };
