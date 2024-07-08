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
            query: () => "footer",
        }),
        getAboutUsData: builder.query({
            query: () => "informationslug/about"
        }),
        postContactData: builder.mutation({
            query: (data) => ({ 
                url: "contactUs",
                method: "POST",
                body: data,
            }),
        }),
        postNewsLetterData: builder.mutation({
            query: (data) => ({ 
                url: "newsLetter",
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