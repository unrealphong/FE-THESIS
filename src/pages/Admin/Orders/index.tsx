import {
  Button,
  DatePicker,
  Form,
  Input,
  List,
  Modal,
  Popconfirm,
  Table,
} from "antd"
import moment from "moment"
import { useState } from "react"

const initialOrders = [
  {
    id: 1,
    customer: "John Doe",
    date: "2023-06-01",
    total: 100,
    status: "Pending",
    products: [
      { name: "Product A", variant: "Size M", quantity: 1, price: 50 },
      { name: "Product B", variant: "Color Red", quantity: 2, price: 25 },
    ],
  },
  {
    id: 2,
    customer: "Jane Smith",
    date: "2023-06-02",
    total: 200,
    status: "Completed",
    products: [
      { name: "Product C", variant: "Size L", quantity: 1, price: 100 },
      { name: "Product D", variant: "Color Blue", quantity: 1, price: 100 },
    ],
  },
]

const OrderManagement = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isViewModalVisible, setIsViewModalVisible] = useState(false)
  const [editingOrder, setEditingOrder] = useState(null)
  const [viewingOrder, setViewingOrder] = useState(null)

  const [form] = Form.useForm()

  const showModal = (order) => {
    setEditingOrder(order)
    form.setFieldsValue({
      ...order,
      date: order ? moment(order.date) : null,
    })
    setIsModalVisible(true)
  }

  const showViewModal = (order) => {
    setViewingOrder(order)
    setIsViewModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  const handleViewCancel = () => {
    setIsViewModalVisible(false)
  }

  const handleOk = () => {
    form.validateFields().then((values) => {
      const formattedValues = {
        ...values,
        date: values.date.format("YYYY-MM-DD"),
      }

      if (editingOrder) {
        setOrders(
          orders.map((order) =>
            order.id === editingOrder.id ? { ...order, ...formattedValues } : order,
          ),
        )
      } else {
        setOrders([...orders, { ...formattedValues, id: Date.now() }])
      }
      handleCancel()
    })
  }

  const handleDelete = (id) => {
    setOrders(orders.filter((order) => order.id !== id))
  }

  const columns = [
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (_text: string, record) => (
        <div className="space-x-2">
          <Button type="primary" onClick={() => showViewModal(record)}>
            View
          </Button>
          <Button type="primary" onClick={() => showModal(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ]

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl">Order Management</h2>
        <Button type="primary" onClick={() => showModal(null)}>
          Add Order
        </Button>
      </div>
      <Table dataSource={orders} columns={columns} rowKey="id" />
      <Modal
        title={editingOrder ? "Edit Order" : "Add Order"}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="customer"
            label="Customer"
            rules={[{ required: true, message: "Please input the customer name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: "Please select the date!" }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="total"
            label="Total"
            rules={[{ required: true, message: "Please input the total amount!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please input the status!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Order Details"
        open={isViewModalVisible}
        footer={[
          <Button key="close" onClick={handleViewCancel}>
            Close
          </Button>,
        ]}
        onCancel={handleViewCancel}
      >
        {viewingOrder && (
          <div>
            <p>
              <strong>Customer:</strong> {viewingOrder.customer}
            </p>
            <p>
              <strong>Date:</strong> {viewingOrder.date}
            </p>
            <p>
              <strong>Total:</strong> {viewingOrder.total}
            </p>
            <p>
              <strong>Status:</strong> {viewingOrder.status}
            </p>
            <p>
              <strong>Products:</strong>
            </p>
            <List
              dataSource={viewingOrder.products}
              renderItem={(product) => (
                <List.Item>
                  <List.Item.Meta
                    title={product.name}
                    description={`Variant: ${product.variant}, Quantity: ${product.quantity}, Price: $${product.price}`}
                  />
                </List.Item>
              )}
            />
          </div>
        )}
      </Modal>
    </div>
  )
}

export default OrderManagement
