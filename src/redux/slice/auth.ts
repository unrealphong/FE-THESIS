import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    accessToken: null,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload
        },
        setError(state, action) {
            state.error = action.payload
        },
        setSuccess(state, action) {
            state.success = action.payload
        },
        setAccessToken(state, action) {
            state.accessToken = action.payload
        },
        removeAccessToken(state) {
            state.accessToken = null
        },
        clear: () => initialState,
    },
})
export const authActions = authSlice.actions

export const { reducer: authReducer } = authSlice
