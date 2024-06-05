import { Category } from "@/@types/category"
import httpRequest from "@/api/axios-instance"
import { getAllCategory } from "@/api/services/CategoryService"
import { PlusOutlined } from "@ant-design/icons"
import { Button, Form, Input, Select, Upload } from "antd"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
const { Option } = Select

const AddProduct = () => {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [sale, setSale] = useState("")
  const [isFlashSale, setIsFlashSale] = useState("")
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([])
  const [categories, setCategories] = useState<Category[]>([])
  const [variants, setVariants] = useState([{ color: "", size: "", quantity: 0 }])
  const navigate = useNavigate()
  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    const allCategory = await getAllCategory()
    setCategories(allCategory)
  }

  const handleAddVariant = () => {
    setVariants([...variants, { color: "", size: "", quantity: 0 }])
  }

  const handleVariantChange = (index, key, value) => {
    const newVariants = [...variants]
    newVariants[index][key] = value
    setVariants(newVariants)
  }

  const handleAddProduct = async () => {
    const formData = new FormData()
    formData.append("title", title)
    formData.append("category", category)
    formData.append("price", price)
    formData.append("sale", sale)
    formData.append("isFlashSale", isFlashSale)
    formData.append("description", description)

    images.forEach((file) => formData.append("images", file.originFileObj))

    variants.forEach((variant, index) => {
      formData.append(`variants[${index}][color]`, variant.color)
      formData.append(`variants[${index}][size]`, variant.size)
      formData.append(`variants[${index}][quantity]`, variant.quantity)
    })
    try {
      const response = await httpRequest.post("/product", formData)

      if (response.data.success) {
        toast("Product added successfully")
        navigate("/quan-ly-san-pham")
      }
    } catch (error) {
      console.error("Failed to add product:", error)
    }
  }

  return (
    <div className="container mx-auto rounded-lg bg-white p-5 shadow-lg">
      <h2 className="mb-5 text-2xl font-semibold text-gray-700">
        Thêm Sản Phẩm Mới
      </h2>
      <Form layout="vertical" className="space-y-4" onFinish={handleAddProduct}>
        <div className="flex space-x-4">
          <Form.Item label="Tên Sản Phẩm" className="flex-grow">
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Item>
          <Form.Item label="Loại Sản Phẩm" className="flex-grow">
            <Select value={category} onChange={(value) => setCategory(value)}>
              <Option value="">Chọn Loại Sản Phẩm</Option>
              {categories.map((cat) => (
                <Option key={cat.id} value={cat.id}>
                  {cat.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <div className="flex space-x-4">
          <Form.Item label="Giá" className="flex-grow">
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Giảm Giá" className="flex-grow">
            <Input
              type="number"
              value={sale}
              onChange={(e) => setSale(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Tuỳ Chọn Sản Phẩm" className="flex-grow">
            <Select value={isFlashSale} onChange={(value) => setIsFlashSale(value)}>
              <Option value="">Chọn</Option>
              <Option value={false}>Mặc Định</Option>
              <Option value={true}>Flash Sale</Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item label="Ảnh">
          <Upload
            multiple={true}
            fileList={images}
            beforeUpload={() => false}
            onChange={({ fileList }) => setImages(fileList)}
          >
            <Button>Chọn tệp</Button>
          </Upload>
        </Form.Item>

        {variants.map((variant, index) => (
          <div key={index} className="flex flex-wrap space-x-4">
            <Form.Item label="Màu Sắc">
              <Input
                value={variant.color}
                onChange={(e) => handleVariantChange(index, "color", e.target.value)}
              />
            </Form.Item>

            <Form.Item label="Kích Thước">
              <Input
                value={variant.size}
                onChange={(e) => handleVariantChange(index, "size", e.target.value)}
              />
            </Form.Item>

            <Form.Item label="Số Lượng">
              <Input
                type="number"
                value={variant.quantity}
                onChange={(e) =>
                  handleVariantChange(index, "quantity", parseInt(e.target.value))
                }
              />
            </Form.Item>
          </div>
        ))}

        <Form.Item>
          <Button type="dashed" onClick={handleAddVariant} icon={<PlusOutlined />}>
            Thêm
          </Button>
        </Form.Item>

        <Form.Item label="Mô Tả">
          <Input.TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm Sản Phẩm
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddProduct
