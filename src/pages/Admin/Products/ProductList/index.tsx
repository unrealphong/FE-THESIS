import { Product } from "@/@types/product"
import { deleteProduct, getAllProduct } from "@/api/services/ProductService"
import { Button, Space, Table } from "antd"
import { ColumnGroupType, ColumnType } from "antd/es/table"
import { useEffect, useState } from "react"

const ProductManagement = () => {
  const [products, setProducts] = useState<Product[]>([])

  const fetchProducts = async () => {
    const allProducts: Product[] = await getAllProduct()
    setProducts(allProducts)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleRemoveProduct = async (record: Product) => {
    try {
      await deleteProduct(record.id)
      fetchProducts()
    } catch (error) {
      console.error("An error occurred while deleting product:", error)
    }
  }

  const columns: (ColumnGroupType<Product> | ColumnType<Product>)[] = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (_text: string, _record: Product, index: number) => index + 1,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: "Danh mục",
      dataIndex: ["category", "name"],
      key: "category_name",
    },
    {
      title: "Thương hiệu",
      dataIndex: "brand",
      key: "brand",
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
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />
    </>
  )
}

export default ProductManagement
