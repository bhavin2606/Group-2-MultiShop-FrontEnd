import { api } from "../api";

let token = localStorage.getItem("token")

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
        getAdditionalInformation: builder.query({
            query: (id) => `get-product-details?id=${id}`
        }),
        getProductReview: builder.query({
            query: (id) => `get-product-review?id=${id}`,
            providesTags: ["review"]
        }),
        addReview: builder.mutation({
            query: ({ id, review }) => ({
                url: `add-product-review/${id}`,
                method: "POST",
                body: review,
                headers: { Authorization: `Bearer ${token}` }
            }),
            invalidatesTags: ["review"]
        }),
        searchProducts: builder.query({
            query:(searchTerm)=>`search-filters?search=${searchTerm}`
        })
    })
})

export const {
    useLazySearchProductsQuery,
    useGetProductDataByIdQuery,
    useAddReviewMutation,
    useGetProductReviewQuery,
    useGetAdditionalInformationQuery,
    useGetProductDataQuery,
    useGetFeaturedProductDataQuery,
    useGetProductYouMakeLikeDataQuery
} = ProductApi
