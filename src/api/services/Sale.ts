import { Product } from "@/@types/product"
import httpRequest from "@/api/axios-instance"
import { toast } from "react-toastify"

const getAllSale = async (): Promise<Product[]> => {
    try {
        const response: any = await httpRequest.get("/sales")
        return response.data?.data?.sales ?? []
    } catch (error) {
        console.error("An error occurred while fetching products")
        toast.error("Failed to fetch products. Please try again later.")
        return []
    }
}

export { getAllSale }
