import { api } from "../api";

let token = localStorage.getItem("token")
export const OrdersPageApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => ({
                url: "orders",
                headers: { Authorization: `Bearer ${token}` },

            }),
        }),
        getOrderDetails: builder.query({
            query: (orderId) => ({
                url: `order-details/${orderId}`,
                headers: { Authorization: `Bearer ${token}` },
                // Adjust this to your actual endpoint
            })
        }),
    })
})

export const { useGetOrdersQuery, useGetOrdersDetailsQuery, useLazyGetOrderDetailsQuery } = OrdersPageApi