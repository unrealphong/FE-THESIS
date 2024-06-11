import { Category } from "@/@types/category"
import { Attribute, Variant } from "@/@types/product"
import { getAllAttribute } from "@/api/services/AttributeService"
import { getAllCategory } from "@/api/services/CategoryService"
import { getProductById, updateProduct } from "@/api/services/ProductService"
import {
    ArrowLeftOutlined,
    DeleteOutlined,
    PlusCircleOutlined,
    PlusOutlined,
} from "@ant-design/icons"
import { Button, Form, Input, Select, Space } from "antd"
import { useCallback, useEffect, useState } from "react"
import { Controller, FieldValues, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"

const { Option } = Select

const UpdateProduct = () => {
    const [categories, setCategories] = useState<Category[]>([])
    const [variants, setVariants] = useState<Variant[]>([])
    const [attributes, setAttributes] = useState<Attribute[]>([])
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()

    const {
        control,
        handleSubmit,
        setValue,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        formState: { errors },
    } = useForm()

    const fetchProductDetails = useCallback(async () => {
        if (id) {
            try {
                const product = await getProductById(id)
                setValue("name", product.name)
                setValue("category_id", product.category_id)
                setValue("brand", product.brand)
                setValue("description", product.description)

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const formattedVariants = product.variants.map((variant: any) => {
                    const attributesObj: { [key: string]: string } = {}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    variant.attribute_values.forEach((attr: any) => {
                        attributesObj[attr.attribute_id] = attr.value
                    })

                    return {
                        price: variant.price,
                        quantity: variant.quantity,
                        attribute_values: attributesObj,
                    }
                })
                formattedVariants.forEach((variant: Variant, index: number) => {
                    setValue(`variants[${index}].price`, variant.price)
                    setValue(`variants[${index}].quantity`, variant.quantity)

                    Object.entries(variant.attribute_values).forEach(
                        ([attributeId, value]: [number, string]) => {
                            setValue(
                                `variants[${index}].attributes[${attributeId}]`,
                                value,
                            )
                        },
                    )
                })
                console.log(formattedVariants)
            } catch (error) {
                console.error("Failed to fetch product details:", error)
            }
        }
    }, [id, setValue])
    useEffect(() => {
        fetchCategories()
        fetchAttributes()
        fetchProductDetails()
    }, [fetchProductDetails])

    const fetchCategories = async () => {
        const allCategory = await getAllCategory()
        setCategories(allCategory)
    }

    const fetchAttributes = async () => {
        const allAttribute = await getAllAttribute()
        setAttributes(allAttribute)
    }

    const onSubmit = async (data: FieldValues) => {
        const formattedData = {
            name: data.name,
            category_id: data.category_id,
            brand: data.brand,
            description: data.description,
            variants: data.variants.map((variant: Variant) => ({
                price: variant.price,
                quantity: variant.quantity,
                attribute_values: Object.keys(variant.attributes).map(
                    (attributeId) => ({
                        attribute_id: parseInt(attributeId),
                        value: variant.attributes[attributeId],
                    }),
                ),
            })),
        }

        try {
            const response = await updateProduct(id, formattedData)
            console.log("Product updated successfully:", response)
            navigate("/quan-ly-san-pham")
        } catch (error) {
            console.error("Failed to update product:", error)
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
                quantity: 0,
            },
        ])
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
                </div>
                <h3 className="mt-4 text-lg font-semibold">Sản phẩm biến thể</h3>
                {variants.map((_variant, variantIndex) => (
                    <div key={variantIndex} className="flex flex-wrap space-x-4">
                        {attributes.map((attribute) => (
                            <Form.Item key={attribute.id} label={attribute.name}>
                                <Controller
                                    name={`variants[${variantIndex}].attributes[${attribute.id}]`}
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            size="large"
                                            style={{ width: 240 }}
                                            placeholder={`Chọn ${attribute.name}`}
                                        >
                                            <Option value="">Chọn</Option>
                                            {attribute.type.toLowerCase() ===
                                            "color" ? (
                                                <>
                                                    <Option value="red">Đỏ</Option>
                                                    <Option value="green">
                                                        Xanh lá
                                                    </Option>
                                                    <Option value="blue">
                                                        Xanh dương
                                                    </Option>
                                                </>
                                            ) : attribute.type.toLowerCase() ===
                                              "size" ? (
                                                <>
                                                    <Option value="S">S</Option>
                                                    <Option value="M">M</Option>
                                                    <Option value="L">L</Option>
                                                    <Option value="XL">XL</Option>
                                                </>
                                            ) : null}
                                        </Select>
                                    )}
                                />
                            </Form.Item>
                        ))}
                        <Form.Item label="Giá gốc">
                            <Controller
                                name={`variants[${variantIndex}].price`}
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Input size="large" type="number" {...field} />
                                )}
                            />
                        </Form.Item>
                        <Form.Item label="Số lượng">
                            <Controller
                                name={`variants[${variantIndex}].quantity`}
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Input size="large" type="number" {...field} />
                                )}
                            />
                        </Form.Item>
                        <Form.Item className="flex items-end">
                            <Button
                                size="large"
                                type="dashed"
                                danger
                                icon={<DeleteOutlined />}
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
