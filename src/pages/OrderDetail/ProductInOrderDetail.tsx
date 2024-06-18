import formatNumber from "@/utilities/FormatTotal"
const ProductInOrderDetail = ({ data }: any) => {
    return (
        <>
            <tr>
                <td className="w-1/4">
                    <div className="m-2 flex">
                        <img src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75" />
                        <div className="m-2">
                            <p className="mb-2 text-sm">{data?.product_name}</p>
                            {/* <span className="text-sm ">
                                Kích thước:
                                <span className="font-bold">
                                    XL
                                </span>
                            </span> */}
                            <br />
                            {/* <span className="text-sm">
                                Màu sắc:
                                <span className="font-bold">
                                    red
                                </span>
                            </span> */}
                        </div>
                    </div>
                </td>
                <td>{formatNumber(data?.price)} đ</td>
                <td>x{data?.quantity}</td>
                <td>
                    <p className="font-bold">
                        {formatNumber(data?.price * data?.quantity)} đ
                    </p>
                </td>
            </tr>
        </>
    )
}

export default ProductInOrderDetail
