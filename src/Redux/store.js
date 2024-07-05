import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/ProductSlice";
import categoryReducer from "./Slices/CategorySlice";
import authReducer from "./Slices/AuthSlice";
import { api } from "./api";

export const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
        auth: authReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})