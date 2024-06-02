import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Form, Input, Modal, Space, Table } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"

const CategoryManagement = () => {
  const [categories, setCategories] = useState([])
  const [isAddModalVisible, setIsAddModalVisible] = useState(false)
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)
  const [currentCategory, setCurrentCategory] = useState(null)
  const [form] = Form.useForm()

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://app-server.lafutavn.store/api/category/",
      )
      const rawData = response.data
      if (rawData.success && Array.isArray(rawData.listCategory)) {
        setCategories(rawData.listCategory)
      } else {
        console.error("API response is not valid:", rawData)
      }
    } catch (error) {
      console.error("Failed to fetch categories:", error)
    }
  }

  const handleAddCategory = async (values) => {
    try {
      await axios.post("https://app-server.lafutavn.store/api/category/", values)
      fetchCategories()
      setIsAddModalVisible(false)
      form.resetFields()
    } catch (error) {
      console.error("Failed to add category:", error)
    }
  }

  const handleEditCategory = async (values) => {
    try {
      await axios.put(
        `https://app-server.lafutavn.store/api/category/${currentCategory.id}`,
        values,
      )
      fetchCategories()
      setIsEditModalVisible(false)
      form.resetFields()
    } catch (error) {
      console.error("Failed to edit category:", error)
    }
  }

  const handleDeleteCategory = async (categoryId) => {
    try {
      await axios.delete(
        `https://app-server.lafutavn.store/api/category/${categoryId}`,
      )
      fetchCategories()
    } catch (error) {
      console.error("Failed to delete category:", error)
    }
  }

  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Tên Danh Mục",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Sản Phẩm",
      dataIndex: "productCount",
      key: "productCount",
    },
    {
      title: "Thao Tác",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setCurrentCategory(record)
              form.setFieldsValue(record)
              setIsEditModalVisible(true)
            }}
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteCategory(record.id)}
            danger
          />
        </Space>
      ),
    },
  ]

  return (
    <div className="content">
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setIsAddModalVisible(true)}
        style={{ marginBottom: "16px" }}
      >
        Thêm Danh Mục Mới
      </Button>

      <Table columns={columns} dataSource={categories} rowKey={"_id"} />

      <Modal
        title="Thêm Danh Mục Mới"
        open={isAddModalVisible}
        onCancel={() => setIsAddModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleAddCategory}>
          <Form.Item
            label="Tên Danh Mục"
            name="title"
            rules={[{ required: true, message: "Please input the category name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Thêm Danh Mục
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Chỉnh Sửa Danh Mục"
        open={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleEditCategory}>
          <Form.Item
            label="Tên Danh Mục"
            name="title"
            rules={[{ required: true, message: "Please input the category name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Lưu Thay Đổi
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default CategoryManagement
