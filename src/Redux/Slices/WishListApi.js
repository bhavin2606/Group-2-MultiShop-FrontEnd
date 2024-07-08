// import { url } from "inspector";
import { api } from "../api";

let token = localStorage.getItem("token")
export const WishListApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getWishListData: builder.query({
            query: () => ({
                url: "show-wishlist",
                headers: { Authorization: `Bearer ${token}` },

            }),
            transformResponse: (result) => result.data.data,
            providesTags: ["multishop", "wish"],
        }),
        postWishListData: builder.mutation({
            query: (p_id) => ({
                url: `Add-WishList/${p_id}`,
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
                invalidatesTags: ["wish"]
            })
        }),
    })
})

export const {
    useGetWishListDataQuery,
    usePostWishListDataMutation
} = WishListApi
