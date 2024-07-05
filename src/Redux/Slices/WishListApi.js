import { api } from "../api";


export const WishListApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getWishListData: builder.query({
            query: () => "Get-wishlist"
        }),
    })
})

export const {
    useGetWishListDataQuery,
} = WishListApi
