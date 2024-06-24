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
        } catch (error) {
            console.error("Failed to add attribute:", error)
        }
    }

    const handleEditAttribute = async (values: Attribute) => {
        try {
            await updateAttribute(currentAttribute?.id, values)
            fetchAttributes()
            setIsEditModalVisible(false)
            form.resetFields()
        } catch (error) {
            console.error("Failed to edit attribute:", error)
        }
    }

    const handleDeleteAttribute = async (attributeId: number) => {
        try {
            await deleteAttribute(attributeId)
            fetchAttributes()
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
            }
        } catch (error) {
            console.error("Failed to add attribute value:", error)
        }
    }

    const handleEditAttributeValue = async (values: AttributeValue) => {
        try {
            if (currentAttribute && currentAttributeValue) {
                await updateAttributeValue(
                    currentAttribute.id,
                    currentAttributeValue.id,
                    values,
                )
                fetchAttributes()
                setIsValueModalVisible(false)
                form.resetFields()
            }
        } catch (error) {
            console.error("Failed to edit attribute value:", error)
        }
    }

    const handleDeleteAttributeValue = async (
        attributeId: number,
        attributeValueId: number,
    ) => {
        try {
            await deleteAttributeValue(attributeId, attributeValueId)
            fetchAttributes()
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
            onOk: () => handleDeleteAttribute(attribute.id),
        })
    }

    const showDeleteValueConfirm = (
        attributeId: number,
        attributeValue: AttributeValue,
    ) => {
        Modal.confirm({
            title: "Confirm Deletion",
            content: "Are you sure you want to delete this attribute value?",
            okText: "Delete",
            okType: "danger",
            cancelText: "Cancel",
            onOk: () => handleDeleteAttributeValue(attributeId, attributeValue.id),
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
            title: "Attribute Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Action",
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
                            setIsValueModalVisible(true)
                        }}
                    >
                        Add Value
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
            title: "Value",
            dataIndex: "value",
            key: "value",
        },
        {
            title: "Action",
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
                onClick={() => setIsAddModalVisible(true)}
                style={{ marginBottom: "16px" }}
            >
                Add New Attribute
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
                title="Add New Attribute"
                open={isAddModalVisible}
                onCancel={() => setIsAddModalVisible(false)}
                footer={null}
            >
                <Form form={form} onFinish={handleAddAttribute}>
                    <Form.Item
                        label="Attribute Name"
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
                            Add Attribute
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title="Edit Attribute"
                open={isEditModalVisible}
                onCancel={() => setIsEditModalVisible(false)}
                footer={null}
            >
                <Form form={form} onFinish={handleEditAttribute}>
                    <Form.Item
                        label="Attribute Name"
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
                            Save Changes
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title={
                    currentAttributeValue
                        ? "Edit Attribute Value"
                        : "Add Attribute Value"
                }
                open={isValueModalVisible}
                onCancel={() => setIsValueModalVisible(false)}
                footer={null}
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
                        label="Value"
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
                            {currentAttributeValue ? "Save Changes" : "Add Value"}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default AttributeManagement
