import { api } from "../api";


export const CategoryApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCategoryData: builder.query({
            query: () => "list-category"
        }),
    })
})

export const { useGetCategoryDataQuery } = CategoryApi
