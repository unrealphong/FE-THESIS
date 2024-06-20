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
        return createdProduct
    } catch (error) {
        console.error("An error occurred while creating product")
        toast.error("Failed to create orders. Please try again later.")
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
        return createdProduct
    } catch (error) {
        console.error("An error occurred while creating product")
        toast.error("Failed to create orders. Please try again later.")
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
        toast.error("Failed to fetch orders. Please try again later.")
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
        toast.error("Failed to fetch orders. Please try again later.")
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
        toast.error("Failed to fetch orders. Please try again later.")
        return []
    }
}
const getBillconfirm = async () => {
    try {
        const response: AxiosResponse<{ data: { data: any } }> =
            await httpRequest.get(`/bills-confirm`)
        return response.data?.data?.data ?? []
    } catch (error) {
        console.error("An error occurred while fetching products")
        toast.error("Failed to fetch orders. Please try again later.")
        return []
    }
}
const getBillPending = async () => {
    try {
        const response: AxiosResponse<{ data: { data: any } }> =
            await httpRequest.get(`/bills-pending`)
        return response.data?.data?.data ?? []
    } catch (error) {
        console.error("An error occurred while fetching products")
        toast.error("Failed to fetch orders. Please try again later.")
        return []
    }
}
const getBillShiping = async () => {
    try {
        const response: AxiosResponse<{ data: { data: any } }> =
            await httpRequest.get(`/bills-shiping`)
        return response.data?.data?.data ?? []
    } catch (error) {
        console.error("An error occurred while fetching products")
        toast.error("Failed to fetch orders. Please try again later.")
        return []
    }
}
const getBillDone = async () => {
    try {
        const response: AxiosResponse<{ data: { data: any } }> =
            await httpRequest.get(`/bills-done`)
        return response.data?.data?.data ?? []
    } catch (error) {
        return []
    }
}
const getBillCancel = async () => {
    try {
        const response: AxiosResponse<{ data: { data: any } }> =
            await httpRequest.get(`/bills-cancel`)
        return response.data?.data?.data ?? []
    } catch (error) {
        return []
    }
}
const getBillPaid = async () => {
    try {
        const response: AxiosResponse<{ data: { data: any } }> =
            await httpRequest.get(`/bills-paid`)
        return response.data?.data?.data ?? []
    } catch (error) {
        return []
    }
}
const getBillsDetail = async (id:any) => {
    try {
        const response: AxiosResponse<{ data: { data: any } }> =
            await httpRequest.get(`/bills-with-billDetail/${id}`)
        return response.data?.data?.data ?? []
    } catch (error) {
        return []
    }
}
const updateCancel = async (id: any) => {
    try {
        const response: AxiosResponse<{ data: any }> = await httpRequest.post(
            `/bills-cancel/${id}`,
        )
        const createdProduct = response.data?.data
        return createdProduct
    } catch (error) {
        return undefined
    }
}
export {
    addBill,
    getAllBill,
    getBillDetail,
    addBillDetail,
    getAllBillDetail,
    getBillconfirm,
    getBillPending,
    getBillShiping,
    getBillDone,
    getBillCancel,
    getBillPaid,
    updateCancel,
    getBillsDetail
}
