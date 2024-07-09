import { api } from "../api";

export const GeneralSettingsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getHelpData: builder.query({
            query: () => "informationslug/help"
        }),
        getFaqData: builder.query({
            query: () => "informationslug/faqs"
        }),
        getSettingData: builder.query({
            query: () => "get-setting",
        }),
        getAboutUsData: builder.query({
            query: () => "informationslug/about"
        }),
        postContactData: builder.mutation({
            query: (data) => ({ 
                url: "add-contact",
                method: "POST",
                body: data,
            }),
        }),
        postNewsLetterData: builder.mutation({
            query: (data) => ({ 
                url: "news-letter",
                method: "POST",
                body: data,
            }),
        }),
    })
})
export const {
    useGetHelpDataQuery,
    useGetFaqDataQuery,
    useGetSettingDataQuery,
    useGetAboutUsDataQuery,
    usePostContactDataMutation,
    usePostNewsLetterDataMutation
} = GeneralSettingsApi