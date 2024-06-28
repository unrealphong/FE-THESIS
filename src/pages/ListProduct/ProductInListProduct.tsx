import { Link } from "react-router-dom"
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import formatNumber from "@/utilities/FormatTotal"
import { useEffect, useState } from "react"
import { getAllSale, getAllSaleProduct } from "@/api/services/Sale"
const ProductInListProduct = ({ data }: any) => {
    const [sales, setsale] = useState<any>([])
    useEffect(() => {
        const fetchSale = async () => {
            const allsale: any = await getAllSaleProduct(data?.sale_id)
            setsale(allsale?.name)
        }

        fetchSale()
    }, [])
    const totalPrice = (data?.variants[0]?.price * sales) / 100
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
                    {sales ? (
                        <>
                            <button className="absolute top-5  flex flex-col gap-2 bg-red-500 p-1  text-sm text-white opacity-0 opacity-100 transition-opacity duration-300">
                                -{sales}%
                            </button>
                        </>
                    ) : (
                        <></>
                    )}

                    <div className=" ">
                        <a
                            className="nav-link fs-7"
                            style={{ fontSize: "14px", fontWeight: "500" }}
                        >
                            {data?.name?.length > 20 ? (
                                <>{data?.name?.slice(0, 20)}...</>
                            ) : (
                                <>{data?.name}</>
                            )}
                        </a>
                        <div
                            className=""
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                        >
                           
                            <p className="text-sl flex text-red-500">
                               
                                {sales ? (
                                    <> <span className="text-sl text-sm font-normal line-through text-black mr-2"> {formatNumber(data?.variants[0]?.price)} đ </span></>
                                    ) : (
                                        <></>
                                    )}
                             
                                {sales ? (
                                    <>
                                        {formatNumber(
                                            data?.variants[0]?.price - totalPrice,
                                        )}
                                        đ
                                    </>
                                ) : (
                                    <> {formatNumber(data?.variants[0]?.price)} đ</>
                                )}
                            </p>
                        </div>
                    </div>

                    <span className="mt-2 opacity-50" style={{ fontSize: "12px" }}>
                        {data?.description?.length > 40 ? (
                            <>{data?.description?.slice(0, 40)}...</>
                        ) : (
                            <>{data?.description}</>
                        )}
                    </span>
                </div>
            </Link>
        </>
    )
}

export default ProductInListProduct
