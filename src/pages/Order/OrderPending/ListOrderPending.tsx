import { Pagination, Spin } from "antd"
import { useEffect, useState } from "react"
import NameListOrderPending from "./NameListOrderPending"
import { LoadingOutlined } from "@ant-design/icons"
import { GetBillPendingWithUser, getBillPending } from "@/api/services/Bill"

const ListOrderPending = () => {
    const [bill, setbill] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)
    const [check1, setcheck] = useState<boolean>()
    const user: any = localStorage.getItem("user")
    const users = JSON.parse(user) || []
    const fetchBills = async () => {
        try {
            const allBills: any = await GetBillPendingWithUser(users?.data?.id)
            setbill(allBills)
        } catch {
        } finally {
            setLoading(false)
        }
    }
    console.log(bill)

    useEffect(() => {
        fetchBills()
    }, [check1])
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = bill?.data?.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageChange = (page: any) => {
        setCurrentPage(page)
    }
    const check = (key: any) => {
        setcheck(key)
    }
    return (
        <>
            <table className="w-full border border-gray-300 bg-gray-100 text-sm text-black">
                <thead className="text-center align-middle">
                    <tr>
                        <th className="p-2">ID</th>
                        <th className="p-2">Tên sản phẩm</th>
                        <th className="p-2">Ảnh</th>
                        <th className="p-2">Địa chỉ/Sđt</th>
                        <th className="p-2">Giá</th>
                        <th className="p-2">Ngày</th>
                        <th className="p-2">Hình thức</th>
                        <th className="p-2">Trạng thái</th>
                        <th className="p-2">Hành động</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {loading ? (
                        <tr>
                            <td colSpan={9}>
                                <div className="flex h-24 items-center justify-center">
                                    <Spin
                                        indicator={
                                            <LoadingOutlined
                                                style={{ fontSize: 48 }}
                                                spin
                                            />
                                        }
                                    />
                                </div>
                            </td>
                        </tr>
                    ) : (
                        currentItems?.map((data: any) => (
                            <NameListOrderPending
                                key={data.id}
                                data={data}
                                onCheck={check}
                            />
                        ))
                    )}
                </tbody>
            </table>
            <div className="mt-5 flex items-center justify-center">
                <Pagination
                    current={currentPage}
                    total={bill?.length}
                    pageSize={itemsPerPage}
                    onChange={handlePageChange}
                />
            </div>
        </>
    )
}

export default ListOrderPending
