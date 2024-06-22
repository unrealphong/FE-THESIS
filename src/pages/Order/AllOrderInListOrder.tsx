import { Pagination } from "antd"
import { useState } from "react"
import ProductInAllOrderInListOrder from "./ProductInAllOrderInListOrder"

const AllOrderInListOrder = ({ data }: any) => {
    console.log(data)

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = data?.data?.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageChange = (page: any) => {
        setCurrentPage(page)
    }
    console.log(currentItems)

    return (
        <>
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
                    {currentItems?.map((data: any) => {
                        return (
                            <>
                                <ProductInAllOrderInListOrder data={data} />
                            </>
                        )
                    })}
                </tbody>
            </table>
            <div className="mt-5 flex items-center justify-center">
                <Pagination
                    current={currentPage}
                    total={data?.length}
                    pageSize={itemsPerPage}
                    onChange={handlePageChange}
                />
            </div>
        </>
    )
}

export default AllOrderInListOrder
