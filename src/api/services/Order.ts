import httpRequest from "@/api/axios-instance"
import { AxiosResponse } from "axios"
import { toast } from "react-toastify"
const addOrder = async (data: any) => {
    try {
        const response: AxiosResponse<{ data: any }> = await httpRequest.post(
            "/orders",
            data,
        )
        const createdProduct = response.data?.data
        toast.success("Product created successfully.")
        return createdProduct
    } catch (error) {
        console.error("An error occurred while creating product")
        toast.error("Failed to create product. Please try again later.")
        return undefined
    }
}
const getAllOrder = async () => {
    try {
        const response: AxiosResponse<{ data: { data: any } }> =
            await httpRequest.get("/orders")
        return response.data?.data?.data ?? []
    } catch (error) {
        console.error("An error occurred while fetching products")
        toast.error("Failed to fetch products. Please try again later.")
        return []
    }
}
const getOrderDetail = async (id: any) => {
    try {
        const response: AxiosResponse<{ data: { data: any } }> =
            await httpRequest.get(`/orders/${id}`)
        return response.data?.data?.data ?? []
    } catch (error) {
        console.error("An error occurred while fetching products")
        toast.error("Failed to fetch products. Please try again later.")
        return []
    }
}
export { addOrder, getAllOrder, getOrderDetail }
