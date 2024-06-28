import { Category } from "@/@types/category"
import {
    Attribute,
    AttributeValue,
    AttributeValues,
    Variant,
} from "@/@types/product"
import { getAllCategory } from "@/api/services/CategoryService"
import { getProductById, updateProduct } from "@/api/services/ProductService"
import {
    getAllAttribute,
    getAllAttributeValue,
} from "@/api/services/AttributeService"
import {
    ArrowLeftOutlined,
    DeleteOutlined,
    PlusCircleOutlined,
    PlusOutlined,
    UploadOutlined,
} from "@ant-design/icons"
import { Button, Form, Input, Select, Space, Upload, UploadFile } from "antd"
import { useCallback, useEffect, useState } from "react"
import { Controller, FieldValues, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
const { Option } = Select

const UpdateProduct = () => {
    const dispatch = useDispatch()
    const [categories, setCategories] = useState<Category[]>([])
    const [variants, setVariants] = useState<Variant[]>([])
    const [fileList, setFileList] = useState<UploadFile[]>([])
    const [attributes, setAttributes] = useState<Attribute[]>([])
    const [attributeValues, setAttributeValues] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()

    const {
        control,
        handleSubmit,
        setValue,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        formState: { errors },
    } = useForm()
    const formatVariantAttributes = (variant: any, attributeNames: string[]) => {
        const attributes: { [key: string]: string } = {}

        variant.attribute_values.forEach((attrValue: any) => {
            const attributeName = attributeNames.find(
                (name) => name === attrValue.attribute.name.toLowerCase(),
            )
            if (attributeName) {
                attributes[attributeName] = attrValue.value
            }
        })

        return attributes
    }
    const fetchProductDetails = useCallback(async () => {
        if (id) {
            try {
                const product = await dispatch(
                    getProductById(parseInt(id, 10)) as any,
                )
                setValue("name", product?.name)
                setValue("category_id", product?.category_id)
                setValue("brand", product?.brand)
                setValue("description", product?.description)

                if (product?.image) {
                    setFileList([
                        {
                            uid: "-1",
                            name: "Current Image",
                            status: "done",
                            url: product.image,
                        },
                    ])
                }
                if (product.variants.length > 0) {
                    const attributeNames = product.variants.reduce(
                        (acc: string[], variant: any) => {
                            variant.attribute_values.forEach((attrValue: any) => {
                                const attributeName =
                                    attrValue.attribute.name.toLowerCase()
                                if (!acc.includes(attributeName)) {
                                    acc.push(attributeName)
                                }
                            })
                            return acc
                        },
                        [],
                    )

                    const formattedVariants = product.variants.map(
                        (variant: any) => {
                            const attributes = formatVariantAttributes(
                                variant,
                                attributeNames,
                            )
                            return {
                                ...variant,
                                attributes,
                            }
                        },
                    )

                    setVariants(formattedVariants)
                } else {
                    toast.error(
                        "Product has no variants or variants data is missing",
                    )
                }
            } catch (error) {
                toast.error("Failed to fetch product details:", error)
            }
        }
    }, [id, setValue])

    useEffect(() => {
        fetchCategories()
        fetchProductDetails()
        fetchAttributes()
        fetchAttributeValues()
    }, [fetchProductDetails])

    const fetchCategories = async () => {
        const allCategory = await getAllCategory()
        setCategories(allCategory)
    }
    const fetchAttributes = async () => {
        const allAttribute = await getAllAttribute()
        setAttributes(allAttribute)
    }

    // Fetch all attribute values from API and organize them by attribute_id
    const fetchAttributeValues = async () => {
        const values = await getAllAttributeValue()
        const organizedValues = values.reduce(
            (acc: Record<number, AttributeValue[]>, item) => {
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
            await dispatch(updateProduct(id, formattedData) as any)
            navigate("/quan-ly-san-pham")
        } catch (error) {
            console.error("Failed to updated product:", error)
            toast.error("Failed to updated product. Please try again later.")
        }
    }
    const handleGoBack = () => {
        navigate("/quan-ly-san-pham")
    }

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
    const handleAttributeChange = (
        attributeType: string,
        value: string,
        index: number,
    ) => {
        const newVariants = [...variants]
        newVariants[index].attributes[attributeType] = value
        setVariants(newVariants)
    }

    return (
        <div className="container mx-auto mt-10 flex flex-col space-y-10 rounded-lg bg-white p-5 shadow-lg">
            <h2 className="my-10 text-2xl font-semibold text-gray-700">
                Cập nhật thông tin sản phẩm
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
                        {attributes.map((attribute) => (
                            <Form.Item key={attribute.id} label={attribute.name}>
                                <Select
                                    size="large"
                                    style={{ width: 240 }}
                                    placeholder={attribute.name}
                                    value={variant.attributes[attribute.name] || ""}
                                    onChange={
                                        (value) =>
                                            handleAttributeChange(
                                                attribute.name,
                                                value,
                                                index,
                                            ) // Pass index here
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
                            Cập nhật Sản Phẩm
                        </Button>
                        <Button
                            size="large"
                            type="primary"
                            className="bg-red-500"
                            onClick={handleGoBack}
                            icon={<ArrowLeftOutlined />}
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
