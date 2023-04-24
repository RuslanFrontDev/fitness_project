const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./helpers/databse/ConnectDatabase');
const router = require('./routes');
const customErrorHandler = require('./middleware/errors/customErrorHandler');
dotenv.config({
   path:"./config/env/config.env"
})

//MongoDb
connectDatabase();
const app =express();
app.use(express.json());
const cors = require('cors');
app.use(cors())
const PORT = process.env.PORT;
//Routers Middleware
app.use(router);
// error message
app.use(customErrorHandler)
app.listen(PORT, ()=>{
   console.log(`server ${PORT} portunda calisir`);
})