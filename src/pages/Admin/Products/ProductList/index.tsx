import { Product } from "@/@types/product"
import { deleteProduct, getAllProducts } from "@/api/services/ProductService"
import { Button, Space, Table } from "antd"
import { ColumnGroupType, ColumnType } from "antd/es/table"
import { useEffect, useState } from "react"

const ProductManagement = () => {
  const [products, setProducts] = useState<Product[]>([])

  const fetchProducts = async () => {
    const allProducts: Product[] = await getAllProducts()
    setProducts(allProducts)
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

  const columns: (ColumnGroupType<Product> | ColumnType<Product>)[] = [
    {
      title: "Tên sản phẩm",
      dataIndex: "title",
      key: "name",
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: "Hành động",
      key: "action",
      align: "center",
      render: (_text: string, record: Product) => (
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
        rowKey="_id"
        pagination={{ pageSize: 10 }}
      />
    </>
  )
}

export default ProductManagement
