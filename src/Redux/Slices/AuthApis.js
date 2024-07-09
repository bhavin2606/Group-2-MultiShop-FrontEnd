import { api } from "../api";
let token = localStorage.getItem("token")
export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUserData: builder.query({
            query: () => ({
                url: "my-profile",
                method: "GET",
                headers: { Authorization: `Bearer ${token}` }
            }),
            providesTags: ["use","multishop"]
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
        postUserSignInData: builder.mutation({
            query: (values) => ({
                url: "user-login",
                method: "POST",
                body: values,
            }),
            
        }),
        postUserSignUpData: builder.mutation({
            query: (data) => ({
                url: "user-register",
                method: "POST",
                body: data,
            }),
            
        }),
        postChangePasswordData: builder.mutation({
            query: (data) => ({
                url: "change-password",
                method: "POST",
                body: data,
                headers: { Authorization: `Bearer ${token}` }
            }),
        }),
        postForgetPasswordData: builder.mutation({
            query: (data) => ({
                url: "password/email",
                method: "POST",
                body: data,
            }),
        }),
        postResetPasswordData: builder.mutation({
            query: (data) => ({
                url: "reset-password",
                method: "POST",
                body: data,
            }),
        }),
        postLogoutData: builder.mutation({
            query: (data) => ({
                url: "user-logout",
                method: "POST",
                body: data,
                headers: { Authorization: `Bearer ${token}` }
            }),
        }),
    })
})


export const {
    useAddUserProfileMutation,
    useGetUserDataQuery,
    usePostUserSignInDataMutation,
    usePostUserSignUpDataMutation,
    usePostChangePasswordDataMutation,
    usePostForgetPasswordDataMutation,
    usePostResetPasswordDataMutation,
    usePostLogoutDataMutation
} = authApi