import { api } from "../api";

export const HomePageApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBannerData: builder.query({
            query: () => "banners"
        }),
        
    })
})
export const{useGetBannerDataQuery} = HomePageApi