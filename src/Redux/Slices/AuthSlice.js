import { createSlice } from "@reduxjs/toolkit";
import { postLoginData } from "../Actions/postApiData";
import { useGetProductDataQuery } from "../api";

const initialState = {
    token: "",
    userData: {}
}
 localStorage.getItem("")
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getUserDetails(state, actions) {
            console.log(actions.payload, "Payloadddddddddddddddddd");
            // state.name = actions.payload.name;
            state.userData = actions.payload;
        },
        getUserToken(state, actions) {
            state.token = actions.payload.token
        }
    }
})

export default authSlice.reducer;
export const { getUserDetails, getUserToken } = authSlice.actions;
