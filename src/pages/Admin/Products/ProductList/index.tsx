import { AttributeValue, Product } from "@/@types/product"
import {
    deleteProduct,
    getAllProduct,
    getProductById,
} from "@/api/services/ProductService"
import { RootState } from "@/redux/store/store"

import { ArrowRightOutlined } from "@ant-design/icons"
import { Button, Descriptions, Modal, Space, Table } from "antd"
import { ColumnGroupType, ColumnType } from "antd/es/table"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const ProductManagement: React.FC = () => {
    const navigate = useNavigate()
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [modalLoading, setModalLoading] = useState(false)
    const dispatch = useDispatch()
    const products = useSelector((state: RootState) => state.products.products)
    const loading = useSelector((state: RootState) => state.products.loading)

    useEffect(() => {
        dispatch(getAllProduct() as any)
    }, [dispatch])

    const handleRemoveProduct = async (record: Product) => {
        try {
            await dispatch(deleteProduct(record.id) as any)
            dispatch(getAllProduct() as any)
        } catch (error) {
            console.error("An error occurred while deleting product:", error)
        }
    }

    const handleUpdate = (id: number) => {
        navigate(`/quan-ly-san-pham/sua/${id}`)
    }

    const handleViewProduct = async (id: number) => {
        setModalLoading(true)
        const product = await dispatch(getProductById(id) as any)
        setSelectedProduct(product)
        setIsModalVisible(true)
        setModalLoading(false)
    }

    const columns: (ColumnGroupType<Product> | ColumnType<Product>)[] = [
        {
            title: "STT",
            dataIndex: "id",
            key: "id",
            render: (_text: string, _record: Product, index: number) => index + 1,
        },
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
            render: (text: string) => <p>{text}</p>,
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (_text, record) => (
                <img src={record.image} style={{ width: "50px", height: "auto" }} />
            ),
        },
        {
            title: "Danh mục",
            dataIndex: ["category", "name"],
            key: "category_name",
        },
        {
            title: "Thương hiệu",
            dataIndex: "brand",
            key: "brand",
            render: (text: string) => <p>{text}</p>,
        },
        {
            title: "Thao tác",
            key: "action",
            align: "center",
            render: (_text: string, record: Product) => (
                <Space size="middle">
                    <Button
                        type="primary"
                        danger
                        onClick={() => handleRemoveProduct(record)}
                    >
                        Xóa
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => handleUpdate(record.id)}
                        icon={<ArrowRightOutlined />}
                    >
                        Sửa
                    </Button>
                    <Button
                        type="default"
                        onClick={() => handleViewProduct(record.id)}
                    >
                        Chi tiết
                    </Button>
                </Space>
            ),
        },
    ]

    const variantColumns = [
        {
            title: "Mã số",
            dataIndex: "id",
            key: "id",
            render: (_text: string, _record: Product, index: number) => index + 1,
        },
        {
            title: "Giá",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Giá khuyến mãi",
            dataIndex: "promotional_price",
            key: "promotional_price",
        },
        {
            title: "Số lượng",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "Thuộc tính",
            key: "attribute_values",
            render: (record: any) =>
                record.attribute_values.map((attribute: AttributeValue) => (
                    <p key={attribute.id}>{attribute.value}</p>
                )),
        },
    ]

    return (
        <>
            <Table
                columns={columns}
                dataSource={products}
                rowKey="id"
                loading={loading}
                pagination={{
                    pageSizeOptions: ["5", "10", "20"],
                    showSizeChanger: true,
                    defaultPageSize: 5,
                }}
            />
            {selectedProduct && (
                <Modal
                    title="Chi tiết sản phẩm"
                    open={isModalVisible}
                    onCancel={() => setIsModalVisible(false)}
                    footer={[
                        <Button key="close" onClick={() => setIsModalVisible(false)}>
                            Đóng
                        </Button>,
                    ]}
                    width={800}
                >
                    {modalLoading ? (
                        <div>Loading...</div>
                    ) : (
                        <>
                            <Descriptions bordered size="middle" column={1}>
                                <Descriptions.Item label="ID">
                                    {selectedProduct.id}
                                </Descriptions.Item>
                                <Descriptions.Item label="Tên sản phẩm">
                                    {selectedProduct.name}
                                </Descriptions.Item>
                                <Descriptions.Item label="Danh mục">
                                    {selectedProduct?.category?.name}
                                </Descriptions.Item>
                                <Descriptions.Item label="Thương hiệu">
                                    {selectedProduct.brand}
                                </Descriptions.Item>
                                <Descriptions.Item label="Mô tả">
                                    {selectedProduct.description}
                                </Descriptions.Item>
                            </Descriptions>
                            <Table
                                columns={variantColumns}
                                dataSource={selectedProduct.variants}
                                rowKey="id"
                                pagination={false}
                                style={{ marginTop: 20 }}
                            />
                        </>
                    )}
                </Modal>
            )}
        </>
    )
}

export default ProductManagement
