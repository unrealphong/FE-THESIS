import { User } from "@/@types/user"
import { deleteUser, getAllUser } from "@/api/services/UserService"
import { Button, Modal, Popconfirm, Table } from "antd"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom" // Import useNavigate

const UserManagement = () => {
    const [users, setUsers] = useState<User[]>([])
    const [isViewModalVisible, setIsViewModalVisible] = useState(false)
    const [viewingUser, setViewingUser] = useState<User>()

    const navigate = useNavigate()

    const fetchUser = async () => {
        const response = await getAllUser()
        console.log(response)
        setUsers(response)
    }

    useEffect(() => {
        fetchUser()
    }, [])

    const showViewModal = (user: User) => {
        setViewingUser(user)
        setIsViewModalVisible(true)
    }

    const handleViewCancel = () => {
        setIsViewModalVisible(false)
    }

    const handleDelete = async (id: number) => {
        try {
            await deleteUser(id)
            setUsers(users.filter((user) => user.id !== id))
        } catch (error) {
            console.error("Error deleting user:", error)
        }
    }

    const columns = [
        {
            title: "Họ và tên",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Số điện thoại",
            dataIndex: "number",
            key: "phone",
        },
        {
            title: "Địa chỉ",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Vai trò",
            dataIndex: "role_id",
            key: "role",
            render: (role_id: number) => (role_id === 1 ? "Khách hàng" : "Admin"),
        },
        {
            title: "Thao tác",
            key: "actions",
            render: (_text: string, record: User) => (
                <div className="space-x-2">
                    <Button type="" onClick={() => showViewModal(record)}>
                        Chi tiết
                    </Button>
                    <Button
                        type="primary"
                        onClick={() =>
                            navigate(`/quan-ly-nguoi-dung/sua/${record.id}`)
                        }
                    >
                        Sửa
                    </Button>
                    <Popconfirm
                        title="Bạn có chắc chắn xóa?"
                        onConfirm={() => handleDelete(record.id)}
                    >
                        <Button type="primary" danger>
                            Xóa
                        </Button>
                    </Popconfirm>
                </div>
            ),
        },
    ]

    return (
        <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
                <Button
                    type="primary"
                    onClick={() => navigate("/quan-ly-nguoi-dung/them")}
                >
                    Thêm tài khoản
                </Button>
            </div>
            <Table dataSource={users} columns={columns} rowKey="id" />
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
                            <strong>Role:</strong>{" "}
                            {viewingUser.role_id === 1 ? "Khách hàng" : "Admin"}
                        </p>
                    </div>
                )}
            </Modal>
        </div>
    )
}

export default UserManagement
