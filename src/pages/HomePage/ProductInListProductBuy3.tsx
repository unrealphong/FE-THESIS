import { getProductById } from "@/api/services/ProductService"
import { getAllSale } from "@/api/services/Sale"
import formatNumber from "@/utilities/FormatTotal"
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { Skeleton } from "antd"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ProductInListProductBuy3 = ({ data }: any) => {
    const [pro, setpro] = useState<any>()
    useEffect(() => {
        const fetchProduct = async () => {
            const product = await getProductById(data?.id)
            setpro(product)
        }
        fetchProduct()
    }, [])
    const [sales, setsale] = useState<any>([])
    useEffect(() => {
        const fetchSale = async () => {
            const allsale: any = await getAllSale()
            setsale(allsale)
        }

        fetchSale()
    }, [])
    const sale = sales?.find((data: any) => data?.id == pro?.sale_id)?.name
    const totalPrice = (pro?.variants[0]?.price * sale) / 100
    console.log(totalPrice);

    return (
        <>
            {pro && sale ? <><Link to={`/products/${data?.id}`}>
                <div className="group relative rounded border border-gray-500 p-2 pb-5 hover:border-2 hover:border-red-300">
                    <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat p-2">
                        <img src={data?.image} alt="" />
                        {sale ? <><button className="absolute top-5  flex flex-col gap-2 bg-red-500 p-1 pl-3 pr-3 text-sm text-white opacity-0 opacity-100 transition-opacity duration-300">
                            -{sale}%
                        </button> </> : <></>}
                        <div className="absolute right-3 top-8 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <Link to={`/products/${data?.id}`}>
                                <ShoppingCartOutlined className="text-2xl" />
                            </Link>
                            <HeartOutlined className="text-2xl" />
                        </div>
                    </div>
                    <div className="pt-3">
                        <h5 className="mb-2 text-xl font-medium leading-tight">
                            {data?.name?.length > 20 ? <>{data?.name?.slice(0, 20)}...</> : <>{data?.name}</>}
                        </h5>
                        <span className=" text-sl line-through">{sale ? <> {formatNumber(pro?.variants[0]?.price)} đ</> : <></>}</span>
                        <div
                            className=""
                            style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
                        >
                            {sale ? <> {formatNumber(pro?.variants[0]?.price - totalPrice)} đ</> : <> {formatNumber(pro?.variants[0]?.price)} đ</>}

                        </div>
                        <p className="text-base"> {data?.description?.length > 40 ? <>{data?.description?.slice(0, 40)}...</> : <>{data?.description}</>}</p>
                    </div>
                </div>
            </Link></> : <> <Skeleton /></>}
            
        </>
    )
}

export default ProductInListProductBuy3
