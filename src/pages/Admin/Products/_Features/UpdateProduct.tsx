import { PlusOutlined, UploadOutlined } from "@ant-design/icons"
import { Button, Form, Input, Select, Upload } from "antd"

const { Option } = Select

const UpdateProduct = () => {
  const onFinish = (values) => {
    console.log("Success:", values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold">Thêm mới sản phẩm</h2>
        <Form
          name="product_form"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Tên sản phẩm"
            name="productName"
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
          >
            <Input placeholder="giày af1..." />
          </Form.Item>

          <Form.Item
            label="Thương hiệu"
            name="brand"
            rules={[{ required: true, message: "Vui lòng nhập thương hiệu!" }]}
          >
            <Input placeholder="Thương hiệu..." />
          </Form.Item>

          <Form.Item
            label="Danh mục sản phẩm"
            name="category"
            rules={[{ required: true, message: "Vui lòng chọn danh mục!" }]}
          >
            <Select placeholder="Category">
              <Option value="category1">Category 1</Option>
              <Option value="category2">Category 2</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Mô tả" name="description">
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item label="Hình ảnh" name="image">
            <Upload>
              <Button icon={<UploadOutlined />}>Chọn 1 ảnh</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Album ảnh" name="album">
            <Upload multiple>
              <Button icon={<UploadOutlined />}>Chọn 1 hoặc nhiều ảnh</Button>
            </Upload>
          </Form.Item>

          <h3 className="mb-4 text-lg font-bold">Sản phẩm biến thể</h3>

          <div className="grid grid-cols-6 gap-4">
            <Form.Item label="Kích cỡ" name="size">
              <Select placeholder="Size">
                <Option value="size1">Size 1</Option>
                <Option value="size2">Size 2</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Màu sắc" name="color">
              <Select placeholder="Color">
                <Option value="color1">Color 1</Option>
                <Option value="color2">Color 2</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Giá gốc" name="originalPrice">
              <Input placeholder="500..." />
            </Form.Item>

            <Form.Item label="Giá khuyến mãi" name="discountedPrice">
              <Input placeholder="500..." />
            </Form.Item>

            <Form.Item label="Số lượng" name="quantity">
              <Input placeholder="500..." />
            </Form.Item>

            <Form.Item className="flex items-center">
              <Button type="danger" icon={<PlusOutlined />} />
            </Form.Item>
          </div>

          <div className="flex justify-end space-x-4">
            <Button type="primary" htmlType="submit">
              Thêm mới
            </Button>
            <Button>Quay lại</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default UpdateProduct
