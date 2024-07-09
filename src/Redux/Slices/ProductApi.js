import { api } from "../api";


export const ProductApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProductData: builder.query({
            query: () => "products",
            providesTags: ["multishop"]
        }),
        getFeaturedProductData: builder.query({
            query: () => "list-featured-product",
            providesTags: ["multishop"]
        }),
        getProductDataById: builder.query({
            query: (slug) => `get-product/${slug}`
        }),
        getProductYouMakeLikeData: builder.query({
            query: (slug) => `get-related-product/${slug}`
        }),
    })
})

export const {
    useGetProductDataByIdQuery,
    useGetProductDataQuery,
    useGetFeaturedProductDataQuery,
    useGetProductYouMakeLikeDataQuery
} = ProductApi
