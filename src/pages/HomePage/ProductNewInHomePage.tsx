import { getAllSale } from "@/api/services/Sale"
import formatNumber from "@/utilities/FormatTotal"
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { Skeleton } from "antd"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ProductNewInHomePage = ({ data }: any) => {
    const [sales, setsale] = useState<any>([])
    useEffect(() => {
        const fetchSale = async () => {
            const allsale: any = await getAllSale()
            setsale(allsale)
        }

        fetchSale()
    }, [])
    const sale = sales?.find((data1: any) => data1?.id == data?.sale_id)?.name
    const totalPrice = (data?.variants[0]?.price * sale) / 100 
    console.log(sale);
    return (
        <>
            {data  ? <><Link to={`/products/${data?.id}`}>
                <div className="group relative rounded border border-gray-500 p-2 pb-5 hover:border-2 hover:border-red-300">
                    <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat p-2">
                        <img src={data?.image} alt="" />
                        {sale ? <><button className="absolute top-5  flex flex-col gap-2 bg-red-500 p-1 pl-3 pr-3 text-sm text-white opacity-0 opacity-100 transition-opacity duration-300">
                            -{sale}%
                        </button> </> : <></>}

                        <div className="absolute right-3 top-8 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <ShoppingCartOutlined className="text-2xl" />
                            <HeartOutlined className="text-2xl" />
                        </div>
                    </div>
                    <div className="pt-3">
                        <h5 className="mb-2 text-xl font-medium leading-tight">
                            {data?.name?.length > 20 ? <>{data?.name?.slice(0, 20)}...</> : <>{data?.name}</>}
                        </h5>
                        <span className=" text-sl line-through">{sale ? <> {formatNumber(data?.variants[0]?.price)} đ</> : <></>}</span>
                        <div
                            className=""
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                        >
                            {sale ? <> {formatNumber(data?.variants[0]?.price - totalPrice)} đ</> : <> {formatNumber(data?.variants[0]?.price)} đ</>}
                        </div>
                        <p className="text-base">{data?.description}</p>
                    </div>
                </div>
            </Link></> : <>  <Skeleton /> </>}
            
        </>
    )
}

export default ProductNewInHomePage
