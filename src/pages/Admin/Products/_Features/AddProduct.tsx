import { Category } from "@/@types/category"
import type { Variant } from "@/@types/product"
import { getAllCategory } from "@/api/services/CategoryService"
import { createProduct } from "@/api/services/ProductService"
import {
    ArrowLeftOutlined,
    DeleteOutlined,
    PlusCircleOutlined,
    PlusOutlined,
    UploadOutlined,
} from "@ant-design/icons"
import { Button, Form, Input, Select, Space, Upload } from "antd"
import { useEffect, useState } from "react"
import { Controller, FieldValues, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
const { Option } = Select

const AddProduct = () => {
    const [categories, setCategories] = useState<Category[]>([])
    const [variants, setVariants] = useState<Variant[]>([])
    const [fileList, setFileList] = useState([])
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate("/quan-ly-san-pham")
    }
    const {
        control,
        handleSubmit,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        formState: { errors },
    } = useForm()

    useEffect(() => {
        fetchCategories()
    }, [])

    /**
     * TODO call api
     */
    const fetchCategories = async () => {
        const allCategory = await getAllCategory()
        setCategories(allCategory)
    }

    const onSubmit = async (data: FieldValues) => {
        const formattedData: any = {
            name: data.name,
            category_id: data.category_id,
            brand: data.brand,
            description: data.description,
            image: "https://via.placeholder.com/640x480.png/00eeee?text=est",
            variants: variants.map((variant) => ({
                price: variant.price,
                price_promotional: variant.price_promotional,
                quantity: variant.quantity,
                attributes: [
                    { name: "color", value: variant.attributes.color },
                    { name: "size", value: variant.attributes.size },
                ],
            })),
        }
        try {
            const response = await createProduct(formattedData)
            console.log("Product created successfully:", response)
            toast.success("Product created successfully.")
            navigate("/quan-ly-san-pham")
        } catch (error) {
            console.error("Failed to create product:", error)
            toast.error("Failed to create product. Please try again later.")
        }
    }
    console.log(variants)

    const handleAddVariant = () => {
        setVariants([
            ...variants,
            {
                price: 0,
                price_promotional: 0,
                quantity: 0,
                attributes: {
                    color: "",
                    size: "",
                },
            },
        ])
    }
    const handleRemoveVariant = (index: number) => {
        const newVariants = variants.filter((_, i) => i !== index)
        setVariants(newVariants)
    }

    const handleFileChange = ({ fileList }) => setFileList(fileList)
    return (
        <div className="container mx-auto mt-10 flex flex-col space-y-10 rounded-lg bg-white p-5 shadow-lg">
            <h2 className="my-10 text-2xl font-semibold text-gray-700">
                Cập nhập thông tin sản phẩm
            </h2>
            <Form
                layout="vertical"
                className="space-y-4"
                onFinish={handleSubmit(onSubmit)}
            >
                <div className="mb-5 flex space-x-4">
                    <div className="w-[1000px]">
                        <Form.Item label="Tên Sản Phẩm">
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        size="large"
                                        style={{ height: 50 }}
                                        {...field}
                                        placeholder="Tên sản phẩm..."
                                    />
                                )}
                            />
                        </Form.Item>
                    </div>
                    <div className="flex-grow">
                        <Form.Item label="Danh mục sản phẩm">
                            <Controller
                                name="category_id"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        size="large"
                                        style={{ height: 50 }}
                                        onChange={(value) => field.onChange(value)}
                                    >
                                        <Option value="">Chọn</Option>
                                        {categories.map((cat) => (
                                            <Option key={cat.id} value={cat.id}>
                                                {cat.name}
                                            </Option>
                                        ))}
                                    </Select>
                                )}
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="flex space-x-8">
                    <div className="w-[1000px]">
                        <Form.Item label="Thương hiệu">
                            <Controller
                                name="brand"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        size="large"
                                        className="w-full"
                                        style={{ height: 50 }}
                                        placeholder="Thương hiệu"
                                    />
                                )}
                            />
                        </Form.Item>
                        <Form.Item label="Mô Tả">
                            <Controller
                                name="description"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Input.TextArea
                                        {...field}
                                        autoSize={{ minRows: 3, maxRows: 6 }}
                                        placeholder="Mô tả"
                                    />
                                )}
                            />
                        </Form.Item>
                    </div>
                    <Form.Item label="Hình ảnh">
                        <Upload
                            listType="picture"
                            fileList={fileList}
                            onChange={handleFileChange}
                            beforeUpload={() => false}
                        >
                            <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
                        </Upload>
                    </Form.Item>
                </div>
                <h3 className="mt-4 text-lg font-semibold">Sản phẩm biến thể</h3>
                {variants.map((variant, index) => (
                    <div key={index} className="flex flex-wrap space-x-4">
                        <Form.Item label="Giá gốc">
                            <Input
                                size="large"
                                type="number"
                                value={variant.price}
                                onChange={(e) => {
                                    const newVariants = [...variants]
                                    newVariants[index].price = parseFloat(
                                        e.target.value,
                                    )
                                    setVariants(newVariants)
                                }}
                            />
                        </Form.Item>
                        <Form.Item label="Giá khuyến mãi">
                            <Input
                                size="large"
                                type="number"
                                value={variant.price_promotional}
                                onChange={(e) => {
                                    const newVariants = [...variants]
                                    newVariants[index].price_promotional =
                                        parseFloat(e.target.value)
                                    setVariants(newVariants)
                                }}
                            />
                        </Form.Item>
                        <Form.Item label="Số lượng">
                            <Input
                                size="large"
                                type="number"
                                value={variant.quantity}
                                onChange={(e) => {
                                    const newVariants = [...variants]
                                    newVariants[index].quantity = parseFloat(
                                        e.target.value,
                                    )
                                    setVariants(newVariants)
                                }}
                            />
                        </Form.Item>
                        <Form.Item label="Màu sắc">
                            <Select
                                size="large"
                                style={{ width: 240 }}
                                placeholder="Color"
                                value={variant.attributes.color}
                                onChange={(value) => {
                                    const newVariants = [...variants]
                                    newVariants[index].attributes.color = value
                                    setVariants(newVariants)
                                }}
                            >
                                <Option value="">Chọn</Option>
                                <Option value="red">Đỏ</Option>
                                <Option value="green">Xanh Lá</Option>
                                <Option value="blue">Xanh Dương</Option>
                                <Option value="white">Trắng</Option>
                                <Option value="black">Đen</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Kích thước">
                            <Select
                                size="large"
                                style={{ width: 240 }}
                                placeholder="Kích thước"
                                value={variant.attributes.size}
                                onChange={(value) => {
                                    const newVariants = [...variants]
                                    newVariants[index].attributes.size = value
                                    setVariants(newVariants)
                                }}
                            >
                                <Option value="">Chọn</Option>
                                <Option value="S">S</Option>
                                <Option value="M">M</Option>
                                <Option value="L">L</Option>
                                <Option value="XL">XL</Option>
                                <Option value="XXL">XXL</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item className="flex items-end">
                            <Button
                                size="large"
                                type="dashed"
                                danger
                                icon={<DeleteOutlined />}
                                onClick={() => handleRemoveVariant(index)}
                            />
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

export default AddProduct
