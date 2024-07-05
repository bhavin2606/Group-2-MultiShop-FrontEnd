import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses"
let token = localStorage.getItem("token")
export const api = createApi({
    reducerPath: "Apis",
    baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.1.188:8000/api/" }),
    tagTypes: ["multishop"],
    endpoints: (bulider) => ({
        getBannerData: bulider.query({
            query: () => "banners"
        }),
        getCategoryData: bulider.query({
            query: () => "category"
        }),
        getUserData: bulider.query({
            query: () => ({
                url: "profile",
                method: "GET",
                headers: { Authorization: `Bearer ${token}` }
            }),
            providesTags:["use"]
        }),
        addUserProfile: bulider.mutation({
            query: (data) => ({
                url: "update-profile",
                method: "POST",
                body: data,
                headers: { Authorization: `Bearer ${token}` }
            }),
            // invalidatesTags: (result, user) => [{ type: "Use", id: user?.detail?.id }]
            invalidatesTags: ["use"]
        }),
        getSettingData: bulider.query({
            query: () => "footer",
        }),
        getAboutUsData: bulider.query({
            query: () => "informationslug/about"
        }),
        getProductData: bulider.query({
            query: () => "products",
            providesTags:["multishop"]
        }),
        getProductDataById: bulider.query({
            query: id => `products/${id}`
        })
    })
})

export const {useGetProductDataByIdQuery, useGetProductDataQuery, useAddUserProfileMutation, useGetBannerDataQuery, useGetCategoryDataQuery, useGetUserDataQuery, useGetSettingDataQuery, useGetAboutUsDataQuery } = api