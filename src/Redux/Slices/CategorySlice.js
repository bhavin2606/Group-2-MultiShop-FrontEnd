import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category : []
}

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        getCategorys(state, action) {
            console.log(action.payload);
            return { ...state, category: action.payload }
        }
    }
})

export default categorySlice.reducer
export const {getCategorys} = categorySlice.actions