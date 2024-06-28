import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "@/@types/product"

interface ProductState {
    products: Product[]
    loading: boolean
    error: string | null
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
            state.loading = false
            state.error = null
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
            state.loading = false
            state.error = null
        },
        editProduct: (state, action: PayloadAction<Product>) => {
            const index = state.products.findIndex(
                (product) => product.id === action.payload.id,
            )
            if (index !== -1) {
                state.products[index] = action.payload
            }
            state.loading = false
            state.error = null
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload,
            )
            state.loading = false
            state.error = null
        },
        setLoading(state) {
            state.loading = true
        },
        clearLoading(state) {
            state.loading = false
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.loading = false
        },
        clear: () => initialState,
    },
})

export const {
    setProducts,
    addProduct,
    editProduct,
    removeProduct,
    setLoading,
    clearLoading,
    setError,
    clear,
} = productSlice.actions

export const productReducer = productSlice.reducer
