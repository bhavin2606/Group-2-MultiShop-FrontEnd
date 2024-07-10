import { api } from "../api";
let token = localStorage.getItem("token")


export const ChackOutApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCheckOutDetail: builder.query({
            query: () => ({
                url: "checkout",
                headers: { Authorization: `Bearer ${token}` },
            }),
            providesTags:["multishop","plus","minus"]
        }),
    })
})

export const { useGetCheckOutDetailQuery } = ChackOutApi
