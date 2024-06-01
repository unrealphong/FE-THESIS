import { Button, Space, Table } from "antd"
import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

interface Product {
  _id: string
  title: string
  slug: string
  description: string
  price: number
  sale: number
  category: { title: string } // Assuming category has a 'title' field
  numberView: number
  rating: { star: number; comment: string }[]
  isFlashSale: boolean
  totalRating: number
}

const getAllProduct = async (): Promise<Product[]> => {
  try {
    const response: AxiosResponse<{ products: Product[] }> = await axios.get(
      "https://app-server.lafutavn.store/api/product/",
    )
    return response.data.products
  } catch (error) {
    console.error("An error occurred while fetching products:", error)
    return []
  }
}

const ProductManagement = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts: Product[] = await getAllProduct()
      setProducts(allProducts)
    }

    fetchProducts()
  }, [])

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (val: number) => <span>{val}</span>,
    },
    {
      title: "Sale",
      dataIndex: "sale",
      key: "sale",
      render: (val: number) => <span>{val}</span>,
    },
    {
      title: "Category",
      dataIndex: ["category", "title"],
      key: "category",
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: "Number of Views",
      dataIndex: "numberView",
      key: "numberView",
      render: (val: number) => <span>{val}</span>,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (ratings: { star: number; comment: string }[]) => (
        <div>
          {ratings.map((rate, index) => (
            <p key={index}>{`Star: ${rate.star}, Comment: ${rate.comment}`}</p>
          ))}
        </div>
      ),
    },
    {
      title: "Is Flash Sale",
      dataIndex: "isFlashSale",
      key: "isFlashSale",
      render: (val: boolean) => <span>{val ? "Yes" : "No"}</span>,
    },
    {
      title: "Total Rating",
      dataIndex: "totalRating",
      key: "totalRating",
      render: (val: number) => <span>{val}</span>,
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button type="primary">Update</Button>
          <Button type="primary">Remove</Button>
        </Space>
      ),
    },
  ]

  return (
    <Table
      columns={columns}
      dataSource={products}
      rowKey="_id"
      pagination={{ pageSize: 10 }}
    />
  )
}

export default ProductManagement
