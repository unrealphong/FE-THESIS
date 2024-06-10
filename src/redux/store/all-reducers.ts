import { authReducer } from "@/redux/slice"
import { combineReducers } from "@reduxjs/toolkit"

export const allReducer = combineReducers({
  auth: authReducer,
})
