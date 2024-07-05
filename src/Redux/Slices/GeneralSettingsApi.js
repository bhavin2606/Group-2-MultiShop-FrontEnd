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
    })
})
export const {
    useGetHelpDataQuery,
    useGetFaqDataQuery,
    useGetSettingDataQuery,
    useGetAboutUsDataQuery
} = GeneralSettingsApi