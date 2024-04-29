// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { useContext } from "react";
// import { UserContext } from "../App";
// import Api from "../components/WebApi";
// export const getUserProducts = createAsyncThunk("UserProductSlice/getUserProduct", async (userId) => {
//     const { user, setUser } = useContext(UserContext);
//     try {
//         let response = await axios.get(`${Api.GetPRoductByUserID}/${userId}`);
//         console.log(response.data.product);
//         return response.data.product;
//     }
//     catch (err) {

//     }
// });
// const slice = createSlice({
//     name: "UserProductSlice",
//     initialState: {
//         userProductList: [],
//         isLoading: false,
//         error: false
//     },
//     extraReducers: (builder) => {
//         builder.addCase(getUserProducts.pending, (state, action) => {
//             state.isLoading = true;
//         }).addCase(getUserProducts.fulfilled, (state, action) => {
//             state.isLoading = false;
//             state.userProductList = action.payload;
//         }).addCase(getUserProducts.rejected, (state, action) => {
//             state.error = "Oops! something went wrong..";
//         })
//     }
// });

// export const { removeProduct } = slice.actions;
// export default slice.reducer;