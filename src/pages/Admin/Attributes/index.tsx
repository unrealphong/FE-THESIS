import { Attribute, AttributeValue } from "@/@types/product"
import {
    createAttribute,
    deleteAttribute,
    getAllAttribute,
    updateAttribute,
    createAttributeValue,
    deleteAttributeValue,
    updateAttributeValue,
} from "@/api/services/AttributeService"
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Form, Input, Modal, Space, Table } from "antd"
import { useEffect, useState } from "react"

const AttributeManagement = () => {
    const [attributes, setAttributes] = useState<Attribute[]>([])
    const [isAddModalVisible, setIsAddModalVisible] = useState(false)
    const [isEditModalVisible, setIsEditModalVisible] = useState(false)
    const [isValueModalVisible, setIsValueModalVisible] = useState(false)
    const [currentAttribute, setCurrentAttribute] = useState<Attribute | null>(null)
    const [currentAttributeValue, setCurrentAttributeValue] =
        useState<AttributeValue | null>(null)
    const [form] = Form.useForm()

    useEffect(() => {
        fetchAttributes()
    }, [])

    const fetchAttributes = async () => {
        try {
            const data = await getAllAttribute()
            setAttributes(data)
        } catch (error) {
            console.error("Failed to fetch attributes:", error)
        }
    }

    const handleAddAttribute = async (values: Attribute) => {
        try {
            await createAttribute(values)
            fetchAttributes()
            setIsAddModalVisible(false)
            form.resetFields()
            setCurrentAttribute(null) // Đặt lại currentAttribute khi đóng modal
        } catch (error) {
            console.error("Failed to add attribute:", error)
        }
    }

    const handleEditAttribute = async (values: Attribute) => {
        try {
            if (currentAttribute) {
                await updateAttribute(currentAttribute.id, values)
                fetchAttributes()
                setIsEditModalVisible(false)
                form.resetFields()
                setCurrentAttribute(null) // Đặt lại currentAttribute khi đóng modal
            }
        } catch (error) {
            console.error("Failed to edit attribute:", error)
        }
    }

    const handleDeleteAttribute = async (attributeId: number) => {
        try {
            await deleteAttribute(attributeId)
            await fetchAttributes()
        } catch (error) {
            console.error("Failed to delete attribute:", error)
        }
    }

    const handleAddAttributeValue = async (values: AttributeValue) => {
        try {
            if (currentAttribute) {
                await createAttributeValue(currentAttribute.id, values)
                fetchAttributes()
                setIsValueModalVisible(false)
                form.resetFields()
                setCurrentAttributeValue(null)
            }
        } catch (error) {
            console.error("Failed to add attribute value:", error)
        }
    }

    const handleEditAttributeValue = async (values: AttributeValue) => {
        try {
            if (currentAttributeValue) {
                await updateAttributeValue(currentAttributeValue.id, values)
                fetchAttributes()
                setIsValueModalVisible(false)
                form.resetFields()
                setCurrentAttributeValue(null)
            }
        } catch (error) {
            console.error("Failed to edit attribute value:", error)
        }
    }

    const handleDeleteAttributeValue = async (attributeValueId: number) => {
        try {
            await deleteAttributeValue(attributeValueId)
            await fetchAttributes()
        } catch (error) {
            console.error("Failed to delete attribute value:", error)
        }
    }

    const showDeleteConfirm = (attribute: Attribute) => {
        Modal.confirm({
            title: "Confirm Deletion",
            content: "Are you sure you want to delete this attribute?",
            okText: "Delete",
            okType: "danger",
            cancelText: "Cancel",
            onOk: async () => await handleDeleteAttribute(attribute.id),
        })
    }

    const showDeleteValueConfirm = (
        _attributeId: number,
        attributeValue: AttributeValue,
    ) => {
        Modal.confirm({
            title: "Confirm Deletion",
            content: "Are you sure you want to delete this attribute value?",
            okText: "Delete",
            okType: "danger",
            cancelText: "Cancel",
            onOk: async () => await handleDeleteAttributeValue(attributeValue.id),
        })
    }

    const attributeColumns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            render: (_text: string, _record: Attribute, index: number) => index + 1,
        },
        {
            title: "Tên thuộc tính",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Thao tác",
            key: "action",
            render: (record: Attribute) => (
                <Space size="middle">
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => {
                            setCurrentAttribute(record)
                            form.setFieldsValue(record)
                            setIsEditModalVisible(true)
                        }}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        onClick={() => showDeleteConfirm(record)}
                        danger
                    />
                    <Button
                        icon={<PlusOutlined />}
                        onClick={() => {
                            setCurrentAttribute(record)
                            setCurrentAttributeValue(null)
                            form.resetFields()
                            setIsValueModalVisible(true)
                        }}
                    >
                        Thêm giá trị thuộc tính
                    </Button>
                </Space>
            ),
        },
    ]

    const valueColumns = (attribute: Attribute) => [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            render: (_text: string, _record: AttributeValue, index: number) =>
                index + 1,
        },
        {
            title: "Giá trị",
            dataIndex: "value",
            key: "value",
        },
        {
            title: "Thao tác",
            key: "action",
            render: (record: AttributeValue) => (
                <Space size="middle">
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => {
                            setCurrentAttributeValue(record)
                            form.setFieldsValue(record)
                            setIsValueModalVisible(true)
                        }}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        onClick={() => showDeleteValueConfirm(attribute.id, record)}
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
                onClick={() => {
                    setCurrentAttribute(null)
                    form.resetFields()
                    setIsAddModalVisible(true)
                }}
                style={{ marginBottom: "16px" }}
            >
                Thêm thuộc tính mới
            </Button>

            <Table
                columns={attributeColumns}
                dataSource={attributes}
                rowKey={"id"}
                expandable={{
                    expandedRowRender: (record) => (
                        <Table
                            columns={valueColumns(record)}
                            dataSource={record.attribute_values}
                            rowKey={"id"}
                            pagination={false}
                        />
                    ),
                }}
            />

            <Modal
                title="Thêm thuộc tính mới"
                open={isAddModalVisible}
                onCancel={() => setIsAddModalVisible(false)}
                onOk={() => form.submit()}
                afterClose={() => {
                    form.resetFields()
                }}
            >
                <Form form={form} onFinish={handleAddAttribute}>
                    <Form.Item
                        label="Tên thuộc tính"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please input the attribute name!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Thêm thuộc tính
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title="Sửa thuộc tính"
                open={isEditModalVisible}
                onCancel={() => setIsEditModalVisible(false)}
                onOk={() => form.submit()}
                afterClose={() => {
                    form.resetFields()
                }}
            >
                <Form form={form} onFinish={handleEditAttribute}>
                    <Form.Item
                        label="Tên thuộc tính"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please input the attribute name!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Lưu
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title={
                    currentAttributeValue
                        ? "Sửa giá trị thuộc tính"
                        : "Thêm giá trị thuộc tính"
                }
                open={isValueModalVisible}
                onCancel={() => setIsValueModalVisible(false)}
                onOk={() => form.submit()}
                afterClose={() => {
                    form.resetFields()
                }}
            >
                <Form
                    form={form}
                    onFinish={
                        currentAttributeValue
                            ? handleEditAttributeValue
                            : handleAddAttributeValue
                    }
                >
                    <Form.Item
                        label="Giá trị"
                        name="value"
                        rules={[
                            {
                                required: true,
                                message: "Please input the attribute value!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {currentAttributeValue ? "Lưu" : "Thêm thuộc tính"}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default AttributeManagement
