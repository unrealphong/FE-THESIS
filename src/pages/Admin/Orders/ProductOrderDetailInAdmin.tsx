import formatNumber from "@/utilities/FormatTotal"

const ProductOrderDetailInAdmin = ({ data }: any) => {
    return (
        <>
            <tr>
                <td className="w-1/4">
                    <div className="m-2 flex">
                        <img src={data?.image} className="w-24" />
                        <div className="m-2">
                            <p className="mb-2 text-sm">{data?.product_name}</p>
                            <span className="text-sm ">
                                Kích thước:
                                <span className="font-bold">XL</span>
                            </span>
                            <br />
                            <span className="text-sm">
                                Màu sắc:
                                <span className="font-bold">red</span>
                            </span>
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

export default ProductOrderDetailInAdmin
