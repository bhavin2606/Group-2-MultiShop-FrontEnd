import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
}
//  localStorage.getItem("")
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // getUserDetails(state, actions) {
        //     state.token = actions.payload;
        // },
        getUserToken(state, actions) {
            console.log(actions.payload, "Payloadddddddddddddddddd");
            state.token = actions.payload
        }
    }
})

export default authSlice.reducer;
export const { getUserDetails, getUserToken } = authSlice.actions;