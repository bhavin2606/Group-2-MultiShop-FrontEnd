import { api } from "../api";
let token = localStorage.getItem("token")
export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUserData: builder.query({
            query: () => ({
                url: "profile",
                method: "GET",
                headers: { Authorization: `Bearer ${token}` }
            }),
            providesTags: ["use"]
        }),
        addUserProfile: builder.mutation({
            query: (data) => ({
                url: "update-profile",
                method: "POST",
                body: data,
                headers: { Authorization: `Bearer ${token}` }
            }),
            invalidatesTags: ["use"]
        }),
    })
})

export const {
    useAddUserProfileMutation,
    useGetUserDataQuery,
} = authApi