import { useEffect, useState } from "react"
import formatNumber from "../../utilities/FormatTotal"
import { getAllSale } from "@/api/services/Sale"

const ProductInCartCheckOut = ({ data, index, quantity }: any) => {
    const [sales, setsale] = useState<any>([])
    useEffect(() => {
        const fetchSale = async () => {
            const allsale: any = await getAllSale()
            setsale(allsale)
        }

        fetchSale()
    }, [])
    const sale = sales?.find((data1: any) => data1?.id == quantity?.sale_id)?.name
    const totalPrice = (data?.price * sale) / 100
    return (
        <>
            <tr className="bg-gray-100">
                <td className="mt-5 text-center align-middle">{index + 1}</td>
                <td className="mt-5 flex items-center justify-center">
                    <img src={quantity?.image} className="w-20" />
                </td>
                <td className="ml-10 mr-10 mt-10 w-60 whitespace-normal text-center align-middle">
                    <h6>
                        <a href="#" className="text-sl font-bold">
                            {quantity?.name_product}
                        </a>
                    </h6>
                    <p className="mt-2">
                        Kích thước:{" "}
                        <span className="font-bold">{data?.atribute[1].value}</span>
                        <br />
                        Màu sắc:{" "}
                        <span className="font-bold">{data?.atribute[0].value}</span>
                    </p>
                </td>
                <td className="mt-5 text-center align-middle font-bold text-red-500">
                    {sale ? (
                        <span className="text-sl p-2 font-normal text-black line-through">
                            {formatNumber(data?.price)}đ
                        </span>
                    ) : (
                        ""
                    )}
                    {sale
                        ? formatNumber(data?.price - totalPrice)
                        : formatNumber(data?.price)}{" "}
                    đ{/* {formatNumber(data?.price)} đ */}
                </td>
                <td className="mt-5 pl-9 text-center align-middle">
                    {quantity?.quantity}
                </td>
                <td className="mt-5 text-center align-middle font-bold">
                    {sale
                        ? formatNumber(
                              (data?.price - totalPrice) * quantity?.quantity,
                          )
                        : formatNumber(data?.price * quantity?.quantity)}
                    đ
                </td>
            </tr>
            <hr className="my-1 w-full border-t border-dashed border-white " />
        </>
    )
}

export default ProductInCartCheckOut
