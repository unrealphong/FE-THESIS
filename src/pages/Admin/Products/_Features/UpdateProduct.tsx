import { Category } from "@/@types/category"
import { Variant } from "@/@types/product"
import httpRequest from "@/api/axios-instance"
import { getAllCategory } from "@/api/services/CategoryService"
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons"
import {
  Button,
  Form,
  Image,
  Input,
  Select,
  Space,
  Upload,
  UploadFile,
  type GetProp,
  type UploadProps,
} from "antd"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
const { Option } = Select
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0]

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

const UpdateProduct = () => {
  const [title, setTitle] = useState("")
  const [brand, setBrand] = useState("")
  const [category, setCategory] = useState("")
  const [description] = useState("")
  const [images] = useState([])
  const [categories, setCategories] = useState<Category[]>([])
  const [variants, setVariants] = useState<Variant[]>([])
  const navigate = useNavigate()
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState("")
  const [fileList, setFileList] = useState<UploadFile[]>([])
  useEffect(() => {
    fetchCategories()
  }, [])

  const handleGoBack = () => {
    navigate("/quan-ly-san-pham")
  }
  const fetchCategories = async () => {
    const allCategory = await getAllCategory()
    setCategories(allCategory)
  }

  const handleAddVariant = () => {
    setVariants([
      ...variants,
      {
        size: "",
        color: "",
        originalPrice: 0,
        discountedPrice: 0,
        quantity: 0,
      },
    ])
  }
  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  )
  const handleVariantChange = (
    index: number,
    key: keyof Variant,
    value: string | number | undefined,
  ) => {
    const newVariants = [...variants]
    newVariants[index][key] = value
    setVariants(newVariants)
  }
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
  }

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList)

  const handleAddProduct = async () => {
    const formData = new FormData()
    formData.append("title", title)
    formData.append("brand", brand)
    formData.append("category", category)
    formData.append("description", description)

    images.forEach((file) => formData.append("images", file.originFileObj))

    variants.forEach((variant, index) => {
      formData.append(`variants[${index}][color]`, variant.color)
      formData.append(`variants[${index}][size]`, variant.size)
      formData.append(
        `variants[${index}][originalPrice]`,
        variant.originalPrice.toString(),
      )
      formData.append(
        `variants[${index}][discountedPrice]`,
        variant.discountedPrice.toString(),
      )
      formData.append(`variants[${index}][quantity]`, variant.quantity.toString())
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
    <div className="container mx-auto mt-10 flex flex-col space-y-10 rounded-lg bg-white p-5 shadow-lg">
      <h2 className="my-10 text-2xl font-semibold text-gray-700">
        Cập nhập thông tin sản phẩm
      </h2>
      <Form layout="vertical" className="space-y-4" onFinish={handleAddProduct}>
        <div className="mb-5 flex space-x-4">
          <div className="w-[1000px]">
            <Form.Item label="Tên Sản Phẩm">
              <Input
                size="large"
                style={{ height: 50 }}
                className="h-10"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Tên sản phẩm"
              />
            </Form.Item>
          </div>
          <div className="flex-grow">
            <Form.Item label="Danh mục sản phẩm">
              <Select
                size="large"
                value={category}
                style={{ height: 50 }}
                onChange={(value) => setCategory(value)}
              >
                <Option value="">Chọn</Option>
                {categories.map((cat) => (
                  <Option key={cat.id} value={cat.id}>
                    {cat.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </div>
        <div className="flex space-x-8">
          <div className="w-[1000px]">
            <Form.Item label="Thương hiệu">
              <Input
                size="large"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full"
                style={{ height: 50 }}
                placeholder="Thương hiệu"
              />
            </Form.Item>
            <Form.Item label="Mô Tả"></Form.Item>
          </div>
          <div className="max-w-[400px]">
            <Form.Item label="Hình ảnh">
              <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                maxCount={10}
                multiple
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
              {previewImage && (
                <Image
                  wrapperStyle={{ display: "none" }}
                  preview={{
                    visible: previewOpen,
                    onVisibleChange: (visible) => setPreviewOpen(visible),
                    afterOpenChange: (visible) => !visible && setPreviewImage(""),
                  }}
                  src={previewImage}
                />
              )}
            </Form.Item>
          </div>
        </div>
        <h3 className="mt-4 text-lg font-semibold">Sản phẩm biến thể</h3>
        {variants.map((variant, index) => (
          <div key={index} className="flex flex-wrap space-x-4">
            <Form.Item label="Kích cỡ" name="size">
              <Select size="large" style={{ width: 240 }} placeholder="Size">
                <Option value="size1">Size 1</Option>
                <Option value="size2">Size 2</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Màu sắc" name="color">
              <Select size="large" style={{ width: 240 }} placeholder="Color">
                <Option value="color1">Color 1</Option>
                <Option value="color2">Color 2</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Giá gốc">
              <Input
                size="large"
                type="number"
                value={variant.originalPrice}
                onChange={(e) =>
                  handleVariantChange(
                    index,
                    "originalPrice",
                    parseInt(e.target.value),
                  )
                }
              />
            </Form.Item>
            <Form.Item label="Giá khuyến mãi">
              <Input
                size="large"
                type="number"
                value={variant.discountedPrice}
                onChange={(e) =>
                  handleVariantChange(
                    index,
                    "discountedPrice",
                    parseInt(e.target.value),
                  )
                }
              />
            </Form.Item>
            <Form.Item label="Số lượng">
              <Input
                size="large"
                type="number"
                value={variant.quantity}
                onChange={(e) =>
                  handleVariantChange(index, "quantity", parseInt(e.target.value))
                }
              />
            </Form.Item>
            <Form.Item className="flex items-end">
              <Button size="large" type="dashed" danger icon={<DeleteOutlined />} />
            </Form.Item>
          </div>
        ))}
        <Form.Item style={{ marginBottom: 20 }}>
          <Button
            size="large"
            type="dashed"
            onClick={handleAddVariant}
            icon={<PlusOutlined />}
          >
            Thêm
          </Button>
        </Form.Item>
        <Form.Item>
          <Space size="large">
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              icon={<PlusCircleOutlined />}
            >
              Thêm Sản Phẩm
            </Button>
            <Button
              size="large"
              type="primary"
              className="bg-red-500"
              htmlType="submit"
              icon={<ArrowLeftOutlined />}
              onClick={handleGoBack}
            >
              Quay Lại
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UpdateProduct
