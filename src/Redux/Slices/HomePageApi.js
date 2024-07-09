import { api } from "../api";

export const HomePageApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBannerData: builder.query({
            query: () => "home-banner"
        }),
        
    })
})
export const{useGetBannerDataQuery} = HomePageApi