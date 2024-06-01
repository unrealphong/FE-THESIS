import axios from "axios"

const getAllProduct = async () => {
  try {
    const response = await axios.get("http://example.com/api/products")
    const products = response.data

    // Xử lý dữ liệu sản phẩm ở đây
    console.log(products)

    return products
  } catch (error) {
    console.error("An error occurred while fetching products:", error)
    return null
  }
}

export const ProductService = {
  getAllProduct,
}
