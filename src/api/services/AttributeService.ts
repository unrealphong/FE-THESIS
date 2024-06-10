import { Attribute } from "@/@types/product"
import httpRequest from "@/api/axios-instance"
import { AxiosResponse } from "axios"
import { toast } from "react-toastify"

const getAllAttribute = async (): Promise<Attribute[]> => {
  try {
    const response: AxiosResponse<{ data: { attributes: Attribute[] } }> =
      await httpRequest.get("attributes")

    return response.data?.data?.attributes
  } catch (error) {
    console.error("An error occurred while fetching products")
    toast.error("Failed to fetch products. Please try again later.")
    return []
  }
}
export { getAllAttribute }
