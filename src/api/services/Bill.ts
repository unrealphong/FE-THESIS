import httpRequest from "@/api/axios-instance"
import { AxiosResponse } from "axios"
import { toast } from "react-toastify"
const addBill = async (data: any) => {
    try {
        const response: AxiosResponse<{ data: any }> = await httpRequest.post(
            "/bills",
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
const addBillDetail = async (data1: any) => {
    try {
        const response: AxiosResponse<{ data: any }> = await httpRequest.post(
            `/bill-details`,
            data1,
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
const getAllBill = async () => {
    try {
        const response: AxiosResponse<{ data: { data: any } }> =
            await httpRequest.get("/bills")
        return response.data?.data?.data ?? []
    } catch (error) {
        console.error("An error occurred while fetching products")
        toast.error("Failed to fetch products. Please try again later.")
        return []
    }
}
const getBillDetail = async (id: any) => {
    try {
        const response: AxiosResponse<{ data: { data: any } }> =
            await httpRequest.get(`/bills/${id}`)
        return response.data?.data?.data ?? []
    } catch (error) {
        console.error("An error occurred while fetching products")
        toast.error("Failed to fetch products. Please try again later.")
        return []
    }
}
const getAllBillDetail = async () => {
    try {
        const response: AxiosResponse<{ data: { data: any } }> =
            await httpRequest.get(`/bill-details`)
        return response.data?.data?.data ?? []
    } catch (error) {
        console.error("An error occurred while fetching products")
        toast.error("Failed to fetch products. Please try again later.")
        return []
    }
}
export { addBill, getAllBill, getBillDetail, addBillDetail, getAllBillDetail }
