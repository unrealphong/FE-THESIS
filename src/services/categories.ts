import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { pause } from "../utils/pause"

const apiCategories = createApi({
  reducerPath: "category",
  tagTypes: ["Category"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://app-server.lafutavn.store/api",
    fetchFn: async (...args) => {
      await pause(1000)
      return fetch(...args)
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/category",
      providesTags: ["Category"],
    }),
  }),
})
export const { useGetCategoriesQuery } = apiCategories
export const productReducer = apiCategories.reducer
export default apiCategories
