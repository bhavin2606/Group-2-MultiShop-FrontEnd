import { createSlice } from "@reduxjs/toolkit";
import { postLoginData } from "../Actions/postApiData";

const initialState = {
    name: "",
    token: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getUserName(state, actions) {
            console.log(actions.payload, "Payloadddddddddddddddddd");
            state.name = actions.payload.name;
            state.token = actions.payload.token;
        },
    }
})

export default authSlice.reducer;
export const { getUserName } = authSlice.actions;
