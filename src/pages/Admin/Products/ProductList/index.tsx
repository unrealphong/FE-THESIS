import { Button, Space, Table } from "antd"

const ProductManagement = () => {
  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: "Product Price",
      dataIndex: "price",
      key: "price",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (val: any) => <span>{val}</span>,
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button type="primary" style={{ backgroundColor: "red" }}>
            Remove
          </Button>
        </Space>
      ),
    },
  ]

  const products = [
    {
      key: "1",
      name: "John Brown",
      price: 100,
    },
    {
      key: "2",
      name: "Jim Green",
      price: 100,
    },
    {
      key: "3",
      name: "Joe Black",
      price: 100,
    },
  ]

  return (
    <Table columns={columns} dataSource={products} pagination={{ pageSize: 120 }} />
  )
}

export default ProductManagement
