import { Product } from "@/@types/product"
import httpRequest from "@/api/axios-instance"
import { AxiosResponse } from "axios"
import { toast } from "react-toastify"
import {
    setLoading,
    setError,
    setProducts,
    addProduct,
    removeProduct,
    editProduct,
    clearLoading,
} from "@/redux/slice/product"
import { AppDispatch } from "@/redux/store/store"

const getAllProduct =
    () =>
    async (dispatch: AppDispatch): Promise<Product[]> => {
        try {
            dispatch(setLoading())
            const response: AxiosResponse<{ data: { product: Product[] } }> =
                await httpRequest.get("/products")
            const products = response.data?.data?.product ?? []
            dispatch(setProducts(products))
            dispatch(clearLoading())
            return products
        } catch (error) {
            console.error("An error occurred while fetching products")
            toast.error("Failed to fetch products. Please try again later.")
            dispatch(setError("Failed to fetch products. Please try again later."))
            dispatch(clearLoading())
            return []
        }
    }

const getProductById =
    (id: number) =>
    async (dispatch: AppDispatch): Promise<Product | undefined> => {
        try {
            dispatch(setLoading())
            const response = await httpRequest.get(`/products/${id}`)
            dispatch(clearLoading())
            return response.data.data.product
        } catch (error) {
            console.error(`Failed to fetch product with ID ${id}`)
            toast.error(
                `Failed to fetch product with ID ${id}. Please try again later.`,
            )
            dispatch(
                setError(
                    `Failed to fetch product with ID ${id}. Please try again later.`,
                ),
            )
            dispatch(clearLoading())
            return undefined
        }
    }

const createProduct = (product: Product) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading())
        const response = await httpRequest.post("/products", product, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        const newProduct = response.data
        dispatch(addProduct(newProduct))
        dispatch(clearLoading())
        toast.success("Product created successfully.")
        return newProduct
    } catch (error) {
        console.error("An error occurred while creating product:", error)
        toast.error("Failed to create product. Please try again later.")
        dispatch(setError("Failed to create product. Please try again later."))
        dispatch(clearLoading())
        return undefined
    }
}

const updateProduct =
    (id: number, product: Product) =>
    async (dispatch: AppDispatch): Promise<Product | undefined> => {
        try {
            dispatch(setLoading())
            const response: AxiosResponse<{ data: Product }> = await httpRequest.put(
                `/products/${id}`,
                product,
            )
            const updatedProduct = response.data?.data
            dispatch(editProduct(updatedProduct))
            dispatch(clearLoading())
            toast.success("Product updated successfully.")
            return updatedProduct
        } catch (error) {
            console.error(`An error occurred while updating product with ID ${id}`)
            toast.error(
                `Failed to update product with ID ${id}. Please try again later.`,
            )
            dispatch(
                setError(
                    `Failed to update product with ID ${id}. Please try again later.`,
                ),
            )
            dispatch(clearLoading())
            return undefined
        }
    }

const deleteProduct =
    (id: number) =>
    async (dispatch: AppDispatch): Promise<boolean> => {
        try {
            dispatch(setLoading())
            await httpRequest.delete(`/products/${id}`)
            dispatch(removeProduct(id))
            dispatch(clearLoading())
            toast.success("Product deleted successfully.")
            return true
        } catch (error) {
            console.error(`Failed to delete product with ID ${id}`)
            toast.error(
                `Failed to delete product with ID ${id}. Please try again later.`,
            )
            dispatch(
                setError(
                    `Failed to delete product with ID ${id}. Please try again later.`,
                ),
            )
            dispatch(clearLoading())
            return false
        }
    }

const GetProductBuy3 = async () => {
    try {
        const response = await httpRequest.get(`/sale-product/1`)
        return response?.data?.data?.sales
    } catch (error) {
        return undefined
    }
}
const GetProduct50Persion = async () => {
    try {
        const response = await httpRequest.get(`/sale-product/2`)
        return response?.data?.data?.sales
    } catch (error) {
        return undefined
    }
}
const GetProductBuy1Free1 = async () => {
    try {
        const response = await httpRequest.get(`/sale-product/3`)
        return response?.data?.data?.sales
    } catch (error) {
        return undefined
    }
}
const GetProductBuyMax = async () => {
    try {
        const response = await httpRequest.get(`/sale-product/4`)
        return response?.data?.data?.sales
    } catch (error) {
        return undefined
    }
}
const filterProduct = async (data: any) => {
    try {
        const response = await httpRequest.get(
            `/filter?minPrice=${data?.minprice}&maxPrice=${data?.maxprice}&color=${data?.color}&category_id=${data?.category_id}`,
        )
        return response?.data?.data?.original
    } catch (error) {
        return undefined
    }
}
export {
    createProduct,
    deleteProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    GetProductBuy3,
    GetProduct50Persion,
    GetProductBuy1Free1,
    GetProductBuyMax,
    filterProduct,
}
