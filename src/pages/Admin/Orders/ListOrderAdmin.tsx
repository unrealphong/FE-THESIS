import { getAllBill } from "@/api/services/Bill"
import { Pagination, Space, Spin, Table, Tabs, Tag } from "antd"
import { useEffect, useState } from "react"
import NameProductInListOrderAdmin from "./NameProductInListOrderAdmin"
import { Link } from "react-router-dom"
import { LoadingOutlined } from "@ant-design/icons"
const ListOrderAdmin = () => {
    const [bill, setbill] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)
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
    }, [])

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = bill?.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageChange = (page: any) => {
        setCurrentPage(page)
    }
    const onChange = (key: string) => {
        console.log(key)
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
                                <th className="p-2">Địa chỉ</th>
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
                                    <td colSpan="9">
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
            label: "Chờ thanh toán",
            children: (
                <table className="w-full table-fixed border border-gray-200 bg-gray-100 text-sm text-black">
                    <thead className="text-center align-middle">
                        <td className="p-2">ID</td>
                        <td className="p-2">Name</td>
                        <td className="p-2">Image</td>
                        <td className="p-2">Date</td>
                        <td className="p-2">Total</td>
                        <td className="p-2">Status</td>
                        <td className="p-2">Act</td>
                    </thead>
                    <tbody className="bg-white ">
                        <tr>
                            <th className="font-normal">123</th>
                            <th className="font-normal">san pham 1</th>
                            <td className="mt-5 flex items-center justify-center pb-5">
                                <img
                                    src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75"
                                    className="w-20 "
                                />
                            </td>
                            <th className="font-normal">12/12/2022</th>
                            <th className="font-normal">123.000 đ</th>
                            <th className="font-normal">
                                <Tag color="success">success</Tag>
                            </th>
                            <th className="font-normal">
                                <Link to="/orders/1">
                                    <button className="rounded  border border-gray-200 p-1 pl-4 pr-4 text-sm text-black hover:bg-red-500 hover:text-white">
                                        Xem chi tiết
                                    </button>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th className="font-normal">123</th>
                            <th className="font-normal">san pham 1</th>
                            <td className="mt-5 flex items-center justify-center pb-5">
                                <img
                                    src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75"
                                    className="w-20 "
                                />
                            </td>
                            <th className="font-normal">12/12/2022</th>
                            <th className="font-normal">123.000 đ</th>
                            <th className="font-normal">
                                {" "}
                                <Tag color="success">success</Tag>
                            </th>
                            <th className="font-normal">
                                <Link to="/orders/1">
                                    <button className="rounded  border border-gray-200 p-1 pl-4 pr-4 text-sm text-black hover:bg-red-500 hover:text-white">
                                        Xem chi tiết
                                    </button>
                                </Link>
                            </th>
                        </tr>
                    </tbody>
                </table>
            ),
        },
        {
            key: "3",
            label: "Đang xử lý",
            children: (
                <table className="w-full border border-gray-200 bg-gray-100 text-sm text-black">
                    <thead className="text-center align-middle">
                        <td className="p-2">ID</td>
                        <td className="p-2">Name</td>
                        <td className="p-2">Image</td>
                        <td className="p-2">Date</td>
                        <td className="p-2">Total</td>
                        <td className="p-2">Status</td>
                        <td className="p-2">Act</td>
                    </thead>
                    <tbody className="bg-white ">
                        <tr>
                            <th className="font-normal">123</th>
                            <th className="font-normal">san pham 1</th>
                            <td className="mt-5 flex items-center justify-center pb-5">
                                <img
                                    src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75"
                                    className="w-20 "
                                />
                            </td>
                            <th className="font-normal">12/12/2022</th>
                            <th className="font-normal">123.000 đ</th>
                            <th className="font-normal">
                                {" "}
                                <Tag color="success">success</Tag>
                            </th>
                            <th className="font-normal">
                                <Link to="/orders/1">
                                    <button className="rounded  border border-gray-200 p-1 pl-4 pr-4 text-sm text-black hover:bg-red-500 hover:text-white">
                                        Xem chi tiết
                                    </button>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th className="font-normal">123</th>
                            <th className="font-normal">san pham 1</th>
                            <td className="mt-5 flex items-center justify-center pb-5">
                                <img
                                    src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75"
                                    className="w-20 "
                                />
                            </td>
                            <th className="font-normal">12/12/2022</th>
                            <th className="font-normal">123.000 đ</th>
                            <th className="font-normal">
                                {" "}
                                <Tag color="success">success</Tag>
                            </th>
                            <th className="font-normal">
                                <Link to="/orders/1">
                                    <button className="rounded  border border-gray-200 p-1 pl-4 pr-4 text-sm text-black hover:bg-red-500 hover:text-white">
                                        Xem chi tiết
                                    </button>
                                </Link>
                            </th>
                        </tr>
                    </tbody>
                </table>
            ),
        },
        {
            key: "4",
            label: "Đang giao",
            children: (
                <table className="w-full border border-gray-200 bg-gray-100 text-sm text-black">
                    <thead className="text-center align-middle">
                        <td className="p-2">ID</td>
                        <td className="p-2">Name</td>
                        <td className="p-2">Image</td>
                        <td className="p-2">Date</td>
                        <td className="p-2">Total</td>
                        <td className="p-2">Status</td>
                        <td className="p-2">Act</td>
                    </thead>
                    <tbody className="bg-white ">
                        <tr>
                            <th className="font-normal">123</th>
                            <th className="font-normal">san pham 1</th>
                            <td className="mt-5 flex items-center justify-center pb-5">
                                <img
                                    src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75"
                                    className="w-20 "
                                />
                            </td>
                            <th className="font-normal">12/12/2022</th>
                            <th className="font-normal">123.000 đ</th>
                            <th className="font-normal">
                                {" "}
                                <Tag color="success">success</Tag>
                            </th>
                            <th className="font-normal">
                                <Link to="/orders/1">
                                    <button className="rounded  border border-gray-200 p-1 pl-4 pr-4 text-sm text-black hover:bg-red-500 hover:text-white">
                                        Xem chi tiết
                                    </button>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th className="font-normal">123</th>
                            <th className="font-normal">san pham 1</th>
                            <td className="mt-5 flex items-center justify-center pb-5">
                                <img
                                    src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75"
                                    className="w-20 "
                                />
                            </td>
                            <th className="font-normal">12/12/2022</th>
                            <th className="font-normal">123.000 đ</th>
                            <th className="font-normal">
                                {" "}
                                <Tag color="success">success</Tag>
                            </th>
                            <th className="font-normal">
                                <Link to="/orders/1">
                                    <button className="rounded  border border-gray-200 p-1 pl-4 pr-4 text-sm text-black hover:bg-red-500 hover:text-white">
                                        Xem chi tiết
                                    </button>
                                </Link>
                            </th>
                        </tr>
                    </tbody>
                </table>
            ),
        },
        {
            key: "5",
            label: "Đã giao",
            children: (
                <table className="w-full border border-gray-200 bg-gray-100 text-sm text-black">
                    <thead className="text-center align-middle">
                        <td className="p-2">ID</td>
                        <td className="p-2">Name</td>
                        <td className="p-2">Image</td>
                        <td className="p-2">Date</td>
                        <td className="p-2">Total</td>
                        <td className="p-2">Status</td>
                        <td className="p-2">Act</td>
                    </thead>
                    <tbody className="bg-white ">
                        <tr>
                            <th className="font-normal">123</th>
                            <th className="font-normal">san pham 1</th>
                            <td className="mt-5 flex items-center justify-center pb-5">
                                <img
                                    src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75"
                                    className="w-20 "
                                />
                            </td>
                            <th className="font-normal">12/12/2022</th>
                            <th className="font-normal">123.000 đ</th>
                            <th className="font-normal">
                                {" "}
                                <Tag color="success">success</Tag>
                            </th>
                            <th className="font-normal">
                                <Link to="/orders/1">
                                    <button className="rounded  border border-gray-200 p-1 pl-4 pr-4 text-sm text-black hover:bg-red-500 hover:text-white">
                                        Xem chi tiết
                                    </button>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th className="font-normal">123</th>
                            <th className="font-normal">san pham 1</th>
                            <td className="mt-5 flex items-center justify-center pb-5">
                                <img
                                    src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75"
                                    className="w-20 "
                                />
                            </td>
                            <th className="font-normal">12/12/2022</th>
                            <th className="font-normal">123.000 đ</th>
                            <th className="font-normal">
                                {" "}
                                <Tag color="success">success</Tag>
                            </th>
                            <th className="font-normal">
                                <Link to="/orders/1">
                                    <button className="rounded  border border-gray-200 p-1 pl-4 pr-4 text-sm text-black hover:bg-red-500 hover:text-white">
                                        Xem chi tiết
                                    </button>
                                </Link>
                            </th>
                        </tr>
                    </tbody>
                </table>
            ),
        },
        {
            key: "6",
            label: "Đã hủy",
            children: (
                <table className="w-full border border-gray-200 bg-gray-100 text-sm text-black">
                    <thead className="text-center align-middle">
                        <td className="p-2">ID</td>
                        <td className="p-2">Name</td>
                        <td className="p-2">Image</td>
                        <td className="p-2">Date</td>
                        <td className="p-2">Total</td>
                        <td className="p-2">Status</td>
                        <td className="p-2">Act</td>
                    </thead>
                    <tbody className="bg-white ">
                        <tr>
                            <th className="font-normal">123</th>
                            <th className="font-normal">san pham 1</th>
                            <td className="mt-5 flex items-center justify-center pb-5">
                                <img
                                    src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75"
                                    className="w-20 "
                                />
                            </td>
                            <th className="font-normal">12/12/2022</th>
                            <th className="font-normal">123.000 đ</th>
                            <th className="font-normal">
                                {" "}
                                <Tag color="success">success</Tag>
                            </th>
                            <th className="font-normal">
                                <Link to="/orders/1">
                                    <button className="rounded  border border-gray-200 p-1 pl-4 pr-4 text-sm text-black hover:bg-red-500 hover:text-white">
                                        Xem chi tiết
                                    </button>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th className="font-normal">123</th>
                            <th className="font-normal">san pham 1</th>
                            <td className="mt-5 flex items-center justify-center pb-5">
                                <img
                                    src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75"
                                    className="w-20 "
                                />
                            </td>
                            <th className="font-normal">12/12/2022</th>
                            <th className="font-normal">123.000 đ</th>
                            <th className="font-normal">
                                {" "}
                                <Tag color="success">success</Tag>
                            </th>
                            <th className="font-normal">
                                <Link to="/orders/1">
                                    <button className="rounded  border border-gray-200 p-1 pl-4 pr-4 text-sm text-black hover:bg-red-500 hover:text-white">
                                        Xem chi tiết
                                    </button>
                                </Link>
                            </th>
                        </tr>
                    </tbody>
                </table>
            ),
        },
        {
            key: "7",
            label: "Hoàn hàng",
            children: (
                <table className="w-full border border-gray-200 bg-gray-100 text-sm text-black">
                    <thead className="text-center align-middle">
                        <td className="p-2">ID</td>
                        <td className="p-2">Name</td>
                        <td className="p-2">Image</td>
                        <td className="p-2">Date</td>
                        <td className="p-2">Total</td>
                        <td className="p-2">Status</td>
                        <td className="p-2">Act</td>
                    </thead>
                    <tbody className="bg-white ">
                        <tr>
                            <th className="font-normal">123</th>
                            <th className="font-normal">san pham 1</th>
                            <td className="mt-5 flex items-center justify-center pb-5">
                                <img
                                    src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75"
                                    className="w-20 "
                                />
                            </td>
                            <th className="font-normal">12/12/2022</th>
                            <th className="font-normal">123.000 đ</th>
                            <th className="font-normal">
                                {" "}
                                <Tag color="success">success</Tag>
                            </th>
                            <th className="font-normal">
                                <Link to="/orders/1">
                                    <button className="rounded  border border-gray-200 p-1 pl-4 pr-4 text-sm text-black hover:bg-red-500 hover:text-white">
                                        Xem chi tiết
                                    </button>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th className="font-normal">123</th>
                            <th className="font-normal">san pham 1</th>
                            <td className="mt-5 flex items-center justify-center pb-5">
                                <img src="className='p-2'" className="w-20 " />
                            </td>
                            <th className="font-normal">12/12/2022</th>
                            <th className="font-normal">123.000 đ</th>
                            <th className="font-normal">
                                {" "}
                                <Tag color="success">success</Tag>
                            </th>
                            <th className="font-normal">
                                <Link to="/orders/1">
                                    <button className="rounded  border border-gray-200 p-1 pl-4 pr-4 text-sm text-black hover:bg-red-500 hover:text-white">
                                        Xem chi tiết
                                    </button>
                                </Link>
                            </th>
                        </tr>
                    </tbody>
                </table>
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
