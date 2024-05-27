import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { pause } from "../utils/pause"

const apiProduct = createApi({
  reducerPath: "product",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://app-server.lafutavn.store/api",
    fetchFn: async (...args) => {
      await pause(1000)
      return fetch(...args)
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/product",
      providesTags: ["Product"],
    }),
  }),
})
export const { useGetProductsQuery } = apiProduct
export const productReducer = apiProduct.reducer
export default apiProduct
