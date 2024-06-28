import { Category } from "@/@types/category"
import type { Attribute, AttributeValue, Variant } from "@/@types/product"
import {
    getAllAttribute,
    getAllAttributeValue,
} from "@/api/services/AttributeService"
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
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
const { Option } = Select

const AddProduct = () => {
    const dispatch = useDispatch()
    const [categories, setCategories] = useState<Category[]>([])
    const [variants, setVariants] = useState<Variant[]>([])
    const [attributes, setAttributes] = useState<Attribute[]>([])
    const [attributeValues, setAttributeValues] = useState<{
        [key: string]: AttributeValue[]
    }>({})
    const navigate = useNavigate()

    const { control, handleSubmit } = useForm()

    const handleGoBack = () => {
        navigate("/quan-ly-san-pham")
    }

    useEffect(() => {
        fetchCategories()
        fetchAttributes()
        fetchAttributeValues()
    }, [])

    const fetchCategories = async () => {
        const allCategory = await getAllCategory()
        setCategories(allCategory)
    }

    const fetchAttributes = async () => {
        const allAttribute = await getAllAttribute()
        setAttributes(allAttribute)
    }

    const fetchAttributeValues = async () => {
        const values = await getAllAttributeValue()
        const organizedValues = values.reduce(
            (acc: { [key: string]: AttributeValue[] }, item) => {
                if (!acc[item.attribute_id]) {
                    acc[item.attribute_id] = []
                }
                acc[item.attribute_id].push(item)
                return acc
            },
            {},
        )
        setAttributeValues(organizedValues)
    }

    const onSubmit = async (data: FieldValues) => {
        if (!data.image || data.image.length === 0) {
            toast.error("Please upload an image.")
            return
        }
        const formattedData: any = {
            name: data.name,
            category_id: data.category_id,
            brand: data.brand,
            description: data.description,
            image: data.image[0].originFileObj,
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
            const newProduct = await dispatch(createProduct(formattedData) as any)
            if (newProduct) {
                navigate("/quan-ly-san-pham")
            } else {
                toast.error("Thêm sản phẩm mới thất bại.")
            }
        } catch (error) {
            console.error("Failed to create product:", error)
        }
    }

    // Add a new variant to the list
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

    // Remove a variant from the list
    const handleRemoveVariant = (index: number) => {
        const newVariants = variants.filter((_, i) => i !== index)
        setVariants(newVariants)
    }

    // Handle attribute change for a variant
    const handleAttributeChange = (
        attributeName: string,
        value: any,
        index: number,
    ) => {
        const newVariants = [...variants]
        newVariants[index].attributes[attributeName] = value
        setVariants(newVariants)
    }

    // Form rendering
    return (
        <div className="container mx-auto mt-10 flex flex-col space-y-10 rounded-lg bg-white p-5 shadow-lg">
            <h2 className="my-10 text-2xl font-semibold text-gray-700">
                Thêm sản phẩm mới
            </h2>
            <Form
                layout="vertical"
                className="space-y-4"
                onFinish={handleSubmit(onSubmit)}
            >
                {/* Form items for product information */}
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
                    <Form.Item label="Image">
                        <Controller
                            name="image"
                            control={control}
                            defaultValue={[]}
                            render={({ field }) => (
                                <Upload
                                    listType="picture"
                                    beforeUpload={() => false}
                                    onChange={({ fileList }) =>
                                        field.onChange(fileList)
                                    }
                                >
                                    <Button icon={<UploadOutlined />}>
                                        Click to upload
                                    </Button>
                                </Upload>
                            )}
                        />
                    </Form.Item>
                </div>
                <h3 className="mt-4 text-lg font-semibold">Sản phẩm biến thể</h3>
                {/* Form items for variants */}
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
                        {/* Select dropdowns for attributes */}
                        {attributes.map((attribute) => (
                            <Form.Item key={attribute.id} label={attribute.name}>
                                <Select
                                    size="large"
                                    style={{ width: 240 }}
                                    placeholder={attribute.name}
                                    value={variant.attributes[attribute.name] || ""}
                                    onChange={(value) =>
                                        handleAttributeChange(
                                            attribute.name,
                                            value,
                                            index,
                                        )
                                    }
                                >
                                    <Option value="">Chọn</Option>
                                    {attributeValues[
                                        attribute.id as keyof typeof attributeValues
                                    ]?.map((value: AttributeValue) => (
                                        <Option key={value.id} value={value.value}>
                                            {value.value}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        ))}
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
                {/* Button to add new variant */}
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
                {/* Submit and go back buttons */}
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
