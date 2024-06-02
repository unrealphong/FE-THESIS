import { PlusOutlined } from "@ant-design/icons"
import { Button, Form, Input, Select, Upload } from "antd"
import axios from "axios"
import React, { useEffect, useState } from "react"

interface Category {
  _id: string
  title: string
}

interface Variant {
  color: string
  size: string
  quantity: number
}

const { Option } = Select

const AddProduct: React.FC = () => {
  const [name, setName] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const [price, setPrice] = useState<number | "">("")
  const [sale, setSale] = useState<number | "">("")
  const [isFlashSale, setIsFlashSale] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [images, setImages] = useState<FileList | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const [variants, setVariants] = useState<Variant[]>([
    { color: "", size: "", quantity: 0 },
  ])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://app-server.lafutavn.store/api/category",
      )
      if (response.data.success) {
        setCategories(response.data.listCategory)
      }
    } catch (error) {
      console.error("Failed to fetch categories:", error)
    }
  }

  const handleAddVariant = () => {
    setVariants([...variants, { color: "", size: "", quantity: 0 }])
  }

  const handleVariantChange = (
    index: number,
    key: keyof Variant,
    value: string | number,
  ) => {
    const newVariants = [...variants]
    newVariants[index][key] = value
    setVariants(newVariants)
  }

  const handleAddProduct = async () => {
    const formData = new FormData()
    formData.append("name", name)
    formData.append("category", category)
    formData.append("price", price.toString())
    formData.append("sale", sale.toString())
    formData.append("isFlashSale", isFlashSale)
    formData.append("description", description)

    if (images) {
      images.forEach((file) => formData.append("images", file))
    }

    variants.forEach((variant, index) => {
      formData.append(`variants[${index}][color]`, variant.color)
      formData.append(`variants[${index}][size]`, variant.size)
      formData.append(`variants[${index}][quantity]`, variant.quantity.toString())
    })

    try {
      const response = await axios.post(
        "https://app-server.lafutavn.store/api/product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      )

      if (response.data.success) {
        alert("Product added successfully")
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
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item label="Loại Sản Phẩm" className="flex-grow">
            <Select value={category} onChange={(value) => setCategory(value)}>
              <Option value="">Chọn Loại Sản Phẩm</Option>
              {categories.map((cat) => (
                <Option key={cat._id} value={cat._id}>
                  {cat.title}
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
              onChange={(e) => setPrice(parseInt(e.target.value))}
            />
          </Form.Item>
          <Form.Item label="Giảm Giá" className="flex-grow">
            <Input
              type="number"
              value={sale}
              onChange={(e) => setSale(parseInt(e.target.value))}
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
            fileList={images ? Array.from(images) : []}
            beforeUpload={() => false}
            onChange={({ fileList }) => setImages(fileList as unknown as FileList)}
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
