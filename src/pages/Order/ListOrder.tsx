import { getAllOrder } from "@/api/services/Order"
import { Pagination, Spin, Tabs, TabsProps, Tag } from "antd"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AllOrderInListOrder from "./AllOrderInListOrder"
import { GetBillWithUser } from "@/api/services/Bill"
import { LoadingOutlined } from "@ant-design/icons"

const ListOrder = () => {
    const [bills, setBill] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)
    const users = JSON.parse(localStorage.getItem("user")!)
    console.log(users)

    const fetchOrders = async () => {
        try {
            const data: any = await GetBillWithUser(users?.data?.id || "")
            setBill(data)
        } catch {
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchOrders()
    }, [])
    console.log(bills)

    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Tất cả đơn hàng",
            children: (
                <>
                    {loading ? (
                        <>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100px",
                                }}
                            >
                                <Spin
                                    indicator={
                                        <LoadingOutlined
                                            style={{ fontSize: 48 }}
                                            spin
                                        />
                                    }
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <AllOrderInListOrder data={bills} />
                        </>
                    )}
                </>
            ),
        },
        {
            key: "2",
            label: "Chờ thanh toán",
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
    const onChange = (key: string) => {
        console.log(key)
    }

    return (
        <>
            <div className="bg-gray-100 p-5 pl-32 pr-32">
                <div className="bg-white p-5 pl-32 pr-32">
                    <span className="text-2xl font-bold">Tất cả đơn hàng</span>
                    <hr className="my-4 w-full border-t border-dashed border-gray-500" />
                    <div>
                        <Tabs
                            defaultActiveKey="1"
                            items={items}
                            onChange={onChange}
                            className="text-2xl font-bold text-red-500"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListOrder
