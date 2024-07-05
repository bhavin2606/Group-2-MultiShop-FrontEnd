import { api } from "../api";


export const ProductApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProductData: builder.query({
            query: () => "products",
            providesTags: ["multishop"]
        }),
        getProductDataById: builder.query({
            query: id => `products/${id}`
        }),
    })
})

export const {
    useGetProductDataByIdQuery,
    useGetProductDataQuery
} = ProductApi
