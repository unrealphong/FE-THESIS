import { Link } from "react-router-dom"
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import formatNumber from "@/utilities/FormatTotal"
import { useEffect, useState } from "react"
const ProductInListProduct = ({ data }: any) => {
    const [checkprice, setcheckprice] = useState<any>(false)
    useEffect(() => {
        if (data?.variants[0]?.price !== data?.variants[0]?.price_promotional) {
            setcheckprice(true)
        }
    }, [])
    const total =
        ((data?.variants[0]?.price - data?.variants[0]?.price_promotional) /
            data?.variants[0]?.price) *
        100

    return (
        <>
            <Link to={`/products/${data?.id}`}>
                <div className="card group relative m-1 rounded border border-gray-300 p-2 hover:border-red-300">
                    <div className="absolute right-3 top-8 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Link to={`/products/${data?.id}`}>
                            <ShoppingCartOutlined className="icon-heart ml-2 text-xl" />
                        </Link>
                        <HeartOutlined className="icon-heart ml-2 text-xl" />
                    </div>

                    <img src={data?.image} />

                    <div className=" ">
                        <a
                            className="nav-link fs-7"
                            style={{ fontSize: "14px", fontWeight: "500" }}
                        >
                            {data?.name}
                        </a>
                        <div
                            className=""
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                        >
                            {checkprice ? (
                                <>
                                    <span className="text-sm font-normal line-through opacity-50">
                                        {formatNumber(data?.variants[0]?.price)} đ
                                    </span>
                                    <p className="flex">
                                        {formatNumber(
                                            data?.variants[0]?.price_promotional,
                                        )}{" "}
                                        đ
                                        <span className="ml-auto mr-2 rounded bg-red-500 px-1 py-1 text-sm font-normal text-white">
                                            -{Math.floor(total)}%
                                        </span>
                                    </p>
                                </>
                            ) : (
                                <> {formatNumber(data?.variants[0]?.price)} đ</>
                            )}
                        </div>
                    </div>

                    <span className="mt-2 opacity-50" style={{ fontSize: "12px" }}>
                        {data?.description}
                    </span>
                </div>
            </Link>
        </>
    )
}

export default ProductInListProduct
