import { getAllBill } from "@/api/services/Bill"
import { Pagination, Space, Spin, Table, Tabs, Tag } from "antd"
import { useEffect, useState } from "react"
import NameProductInListOrderAdmin from "./NameProductInListOrderAdmin"
import { Link } from "react-router-dom"
import { LoadingOutlined } from "@ant-design/icons"
import ListOrderConFirm from "./OrderConFirm/ListOrderConFirm"
import ListOrderPending from "./OrderPending/ListOrderPending"
import ListOrderSiping from "./OrderShiping/ListOrderSiping"
import ListOrderDone from "./OrderDone/ListOrderDone"
import ListOrderCancel from "./OrderCancel/ListOrderCancel"
import ListOrderPaid from "./OrderPaid/ListOrderPaid"
const ListOrderAdmin = () => {
    const [bill, setbill] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)
    const [keys, setkey] = useState<any>(0)
    const fetchBills = async () => {
        try {
            const allBills: any = await getAllBill()
            setbill(allBills)
        } catch {
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBills()
    }, [keys])

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = bill?.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageChange = (page: any) => {
        setCurrentPage(page)
    }
    const onChange = (key: any) => {
        setkey(key)
    }
    const items: any = [
        {
            key: "1",
            label: "Tất cả đơn hàng",
            children: (
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
                                    <NameProductInListOrderAdmin
                                        key={data.id}
                                        data={data}
                                        key1={keys}
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
            ),
        },
        {
            key: "2",
            label: "Đã thanh toán",
            children: (
                <>
                    <ListOrderPaid />
                </>
            ),
        },
        {
            key: "3",
            label: "Chờ thanh toán",
            children: (
                <>
                    <ListOrderPending />
                </>
            ),
        },
        {
            key: "4",
            label: "Đã xác nhận",
            children: (
                <>
                    <ListOrderConFirm />
                </>
            ),
        },
        {
            key: "5",
            label: "Đang giao",
            children: (
                <>
                    <ListOrderSiping />
                </>
            ),
        },
        {
            key: "6",
            label: "Đã giao",
            children: (
                <>
                    <ListOrderDone />
                </>
            ),
        },
        {
            key: "7",
            label: "Đã hủy",
            children: (
                <>
                    <ListOrderCancel />
                </>
            ),
        },
    ]
    return (
        <>
            <div>
                <Tabs
                    defaultActiveKey="1"
                    items={items}
                    onChange={onChange}
                    className="text-2xl font-bold text-red-500"
                />
            </div>
        </>
    )
}

export default ListOrderAdmin
