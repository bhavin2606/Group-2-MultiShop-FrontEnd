import { api } from "../api";
let token = localStorage.getItem("token")

export const CartApi = api.injectEndpoints({
    endpoints: (bulider) => ({
        AddCartItem: bulider.mutation({
            query: ({ id, product }) => {
                console.log(product, id, "adddddddddd");
                return {
                    url: `add-product/cart/${id}`,
                    method: "POST",
                    body: product,
                    headers: { Authorization: `Bearer ${token}` },
                }
            },
            invalidatesTags: ["cart"]
        }),
        getCartProducts: bulider.query({
            query: (auth) => ({
                url: "show-product/cart",
                headers: { Authorization: `Bearer ${auth}` },
            }),
            providesTags: ["cart", "minus", "plus", "multishop"]
        }),
        DeleteCartItem: bulider.mutation({
            query: (id) => ({
                url: `delete-product/cart/${id}`,
                headers: { Authorization: `Bearer ${token}` },
                method: "DELETE",
            }),
            invalidatesTags: ["cart"]
        }),
        MinusCartItem: bulider.mutation({
            query: (id) => ({
                url: `update-item/remove/cart/${id}`,
                headers: { Authorization: `Bearer ${token}` },
                method: "POST",
            }),
            invalidatesTags: ["minus"]
        }),
        PlusCartItem: bulider.mutation({
            query: (id) => ({
                url: `update-item/add/cart/${id}`,
                headers: { Authorization: `Bearer ${token}` },
                method: "POST",
            }),
            invalidatesTags: ["plus"]
        }),
        getCheckOutDetail: bulider.query({
            query: () => ({
                url: "checkout",
                headers: { Authorization: `Bearer ${token}` },
            }),
            providesTags: ["multishop", "plus", "minus"]
        }),
        getAllCity: bulider.query({
            query: () => ({
                url: "get-city",
                headers: { Authorization: `Bearer ${token}` },
            }),
        }),
        getCityById:bulider.query({
            query: (id) => ({
                url: `select-city/${id}`,
                headers: { Authorization: `Bearer ${token}` },
            }),
        }),
    })
})

export const {
    useGetCityByIdQuery,
    useLazyGetCityByIdQuery,
    useGetAllCityQuery,
    useAddCartItemMutation,
    useGetCheckOutDetailQuery,
    useMinusCartItemMutation,
    usePlusCartItemMutation,
    useGetCartProductsQuery,
    useDeleteCartItemMutation } = CartApi