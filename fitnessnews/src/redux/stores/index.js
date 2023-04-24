import { configureStore } from "@reduxjs/toolkit";
import homelayout from "../homeLayoutWriteAndVideos";
const store = configureStore({
   reducer:{
      anasehife:homelayout
   }
})
export default store