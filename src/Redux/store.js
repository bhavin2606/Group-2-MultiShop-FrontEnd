import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/ProductSlice";
import categoryReducer from "./Slices/CategorySlice";
import authReducer from "./Slices/AuthSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
        auth: authReducer,
    }
})