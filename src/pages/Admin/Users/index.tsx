import { Button, Form, Input, Modal, Popconfirm, Table } from "antd"
import { useState } from "react"

const initialUsers = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890",
        address: "123 Main St",
        role: "Admin",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "987-654-3210",
        address: "456 Oak St",
        role: "User",
    },
]

const UserManagement = () => {
    const [users, setUsers] = useState(initialUsers)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isViewModalVisible, setIsViewModalVisible] = useState(false)
    const [editingUser, setEditingUser] = useState(null)
    const [viewingUser, setViewingUser] = useState(null)

    const [form] = Form.useForm()

    const showModal = (user) => {
        setEditingUser(user)
        form.setFieldsValue(user)
        setIsModalVisible(true)
    }

    const showViewModal = (user) => {
        setViewingUser(user)
        setIsViewModalVisible(true)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
        form.resetFields()
    }

    const handleViewCancel = () => {
        setIsViewModalVisible(false)
    }

    const handleOk = () => {
        form.validateFields().then((values) => {
            if (editingUser) {
                setUsers(
                    users.map((user) =>
                        user.id === editingUser.id ? { ...user, ...values } : user,
                    ),
                )
            } else {
                setUsers([...users, { ...values, id: Date.now() }])
            }
            handleCancel()
        })
    }

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
        },
        {
            title: "Actions",
            key: "actions",
            render: (text, record) => (
                <div className="space-x-2">
                    <Button type="primary" onClick={() => showViewModal(record)}>
                        View
                    </Button>
                    <Button type="primary" onClick={() => showModal(record)}>
                        Edit
                    </Button>
                    <Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => handleDelete(record.id)}
                    >
                        <Button type="primary" danger>
                            Delete
                        </Button>
                    </Popconfirm>
                </div>
            ),
        },
    ]

    return (
        <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl">User Management</h2>
                <Button type="primary" onClick={() => showModal(null)}>
                    Add User
                </Button>
            </div>
            <Table dataSource={users} columns={columns} rowKey="id" />
            <Modal
                title={editingUser ? "Edit User" : "Add User"}
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                            { required: true, message: "Please input the name!" },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            { required: true, message: "Please input the email!" },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Phone"
                        rules={[
                            { required: true, message: "Please input the phone!" },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="address"
                        label="Address"
                        rules={[
                            { required: true, message: "Please input the address!" },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="role"
                        label="Role"
                        rules={[
                            { required: true, message: "Please input the role!" },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                title="User Details"
                open={isViewModalVisible}
                footer={[
                    <Button key="close" onClick={handleViewCancel}>
                        Close
                    </Button>,
                ]}
                onCancel={handleViewCancel}
            >
                {viewingUser && (
                    <div>
                        <p>
                            <strong>Name:</strong> {viewingUser.name}
                        </p>
                        <p>
                            <strong>Email:</strong> {viewingUser.email}
                        </p>
                        <p>
                            <strong>Phone:</strong> {viewingUser.phone}
                        </p>
                        <p>
                            <strong>Address:</strong> {viewingUser.address}
                        </p>
                        <p>
                            <strong>Role:</strong> {viewingUser.role}
                        </p>
                    </div>
                )}
            </Modal>
        </div>
    )
}

export default UserManagement
