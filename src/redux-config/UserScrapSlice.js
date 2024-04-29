// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { useContext } from "react";
// import { UserContext } from "../App";
// import Api from "../components/WebApi";
// export const getUserScrap = createAsyncThunk("UserScrapSlice/getUserScrap", async () => {
//     const { user, setUser } = useContext(UserContext);
//     try {
//         let response = await axios.get(`${Api.GetPRoductByUserID}/${user._id}`);
//         console.log(response.data.product);
//         return response.data.product;
//     }
//     catch (err) {

//     }
// });
// const slice = createSlice({
//     name: "UserScrapSlice",
//     initialState: {
//         userScrapList: [],
//         isLoading: false,
//         error: false
//     },
//     extraReducers: (builder) => {
//         builder.addCase(getUserScrap.pending, (state, action) => {
//             state.isLoading = true;
//         }).addCase(getUserScrap.fulfilled, (state, action) => {
//             state.isLoading = false;
//             state.userScrapList = action.payload;
//         }).addCase(getUserScrap.rejected, (state, action) => {
//             state.error = "Oops! something went wrong..";
//         })
//     }
// });
// export default slice.reducer;