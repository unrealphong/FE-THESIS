import { Category } from "@/@types/category"
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { toast } from "react-toastify"
const baseUrl = "https://vapi.vnappmob.com/api/province/"
const requestConfig: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_ENDPOINT_URL || `${baseUrl}`,
    timeout: import.meta.env.VITE_REQUEST_TIMEOUT || 90 * 1000,
    headers: {
        "Content-Type": "application/json",
    },
}

const httpRequest = axios.create(requestConfig)
const getAllProvince = async () => {
    try {
        const response: AxiosResponse<{ data: { results } }> =
            await httpRequest.get("/")
        return response?.data?.results
    } catch (error) {
        console.error("An error occurred while fetching categories")

        toast.error("Failed to fetch categories. Please try again later.")
        return []
    }
}
const getAllDistrict = async (id) => {
    try {
        const response: AxiosResponse<{ data: { results } }> = await httpRequest.get(
            `/district/${id}`,
        )
        return response?.data?.results
    } catch (error) {
        console.error("An error occurred while fetching categories")

        toast.error("Failed to fetch categories. Please try again later.")
        return []
    }
}
const getAllWard = async (id) => {
    try {
        const response: AxiosResponse<{ data: { results } }> = await httpRequest.get(
            `/ward/${id}`,
        )
        return response?.data?.results
    } catch (error) {
        console.error("An error occurred while fetching categories")

        toast.error("Failed to fetch categories. Please try again later.")
        return []
    }
}

export { getAllProvince, getAllDistrict, getAllWard }
