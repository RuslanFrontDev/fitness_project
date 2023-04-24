import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
   moreproducts:[],
   loading:false,
   error: "",
}
export const moreproductsFetch = createAsyncThunk(
   "moreproductsFetch",
   async () => {
     const response = await axios.get("http://localhost:5000/");
     return response?.data;
   }
 );
 const homelayout = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(moreproductsFetch.pending, (state, action) => {
      state.loading = true;
      state.error = ""
    })
    builder.addCase(moreproductsFetch.fulfilled, (state, action) => {
      state.moreproducts = action.payload;
      state.error = false
    })
    builder.addCase(moreproductsFetch.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error fetch"
    })
  },
})

export default homelayout.reducer