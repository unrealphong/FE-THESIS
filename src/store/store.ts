import { combineReducers, configureStore } from "@reduxjs/toolkit"
import apiProduct from "../services/product"
import apiCategories from "../services/categories"

const rootReducer = combineReducers({
  [apiProduct.reducerPath]: apiProduct.reducer,
  [apiCategories.reducerPath]: apiCategories.reducer,
})
const middleware = [apiProduct.middleware, apiCategories.middleware]

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(...middleware),
})
