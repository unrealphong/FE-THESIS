import { Product } from "@/@types/product"
import { deleteProduct, getAllProducts } from "@/api/services/ProductService"
import { Button, Space, Table } from "antd"
import { useEffect, useState } from "react"

const ProductManagement = () => {
  const [products, setProducts] = useState<Product[]>([])

  const fetchProducts = async () => {
    const allProducts: Product[] = await getAllProducts()
    setProducts(allProducts)
    console.log(allProducts)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleRemoveProduct = async (record: Product) => {
    try {
      console.log(record.id)
      const id = record.id
      await deleteProduct(id)
      setProducts(products.filter((product) => product.id !== id))
    } catch (error) {
      console.error("An error occurred while deleting product:", error)
    }
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (text: string, record: Product) => (
        <Space size="middle">
          <Button type="primary" danger onClick={() => handleRemoveProduct(record)}>
            Remove
          </Button>
          <Button type="primary">Update</Button>
        </Space>
      ),
    },
  ]

  return (
    <>
      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />
    </>
  )
}

export default ProductManagement
