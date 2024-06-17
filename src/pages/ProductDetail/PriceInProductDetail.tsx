import { CheckCircleOutlined } from "@ant-design/icons"
import formatNumber from "../../utilities/FormatTotal"
import { useEffect } from "react"

const PriceInProductDetail = ({ data, idcolor, onPrice }) => {
    if (!Array.isArray(data) || data.length === 0) {
        return <div></div>
    }
    const data1 = data[0]
    const priceProduct = data?.find((data) =>
        data?.attributes?.find((data3) => data3?.pivot?.name === idcolor),
    )?.price
    console.log(idcolor)

    useEffect(() => {
        if (priceProduct !== undefined) {
            onPrice(priceProduct)
        }
    }, [priceProduct, onPrice])
    return (
        <>
            <div className="mt-5 flex ">
                <p className="text-xl font-bold  text-red-500">
                    {idcolor ? (
                        <>{formatNumber(priceProduct)}đ</>
                    ) : (
                        <>{formatNumber(data1?.price)}đ</>
                    )}
                </p>
                {/* <p className="text-xm ml-2 mt-1 text-gray-400 line-through">
                   {data1?.price} đ
                </p> */}
                <p className="ml-auto mt-1 font-bold">
                    Còn Hàng
                    <CheckCircleOutlined
                        className="text-white-500 bg-green-600 "
                        style={{ color: "white ", borderRadius: "50%" }}
                    />
                </p>
            </div>
            {/* <span className="text-sm text-red-600">Giảm 53%</span> */}
        </>
    )
}

export default PriceInProductDetail
