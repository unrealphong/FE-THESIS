import { useEffect, useState } from "react"
import formatNumber from "../../utilities/FormatTotal"
import { getProductById } from "@/api/services/ProductService"

const ProductInCartCheckOut = ({ data, index, quantity }: any) => {
    // const [pro, setpro] = useState<any>()
    // useEffect(() => {
    //     const getOneProduct = async () => {
    //         const product = await getProductById(data?.product_id)
    //         setpro(product)
    //     }
    //     getOneProduct()
    // }, [])
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
                            {data?.name_product}
                        </a>
                    </h6>
                    <p className="mt-2">
                        Kích thước:{" "}
                        <span className="font-bold">
                            {data?.attributes[1].attribute_value}
                        </span>
                        <br />
                        Màu sắc:{" "}
                        <span className="font-bold">
                            {data?.attributes[0].attribute_value}
                        </span>
                    </p>
                </td>
                <td className="mt-5 text-center align-middle font-bold text-red-500">
                    {formatNumber(data?.price)} đ
                </td>
                <td className="mt-5 pl-9 text-center align-middle">
                    {quantity?.quantity}
                </td>
                <td className="mt-5 text-center align-middle font-bold">
                    {formatNumber(data?.price * quantity?.quantity)} đ
                </td>
            </tr>
            <hr className="my-1 w-full border-t border-dashed border-white " />
        </>
    )
}

export default ProductInCartCheckOut
