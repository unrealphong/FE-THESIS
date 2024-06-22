import { getProductById } from "@/api/services/ProductService"
import formatNumber from "@/utilities/FormatTotal"
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons"
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

    return (
        <>
            <Link to={`/products/${data?.id}`}>
                <div className="group relative rounded border-gray-500 p-2 pb-5 hover:border">
                    <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat p-2">
                        <img src={data?.image} alt="" />
                        <button className="absolute top-5  flex flex-col gap-2 bg-red-500 p-1 pl-3 pr-3 text-sm text-white opacity-0 opacity-100 transition-opacity duration-300">
                            SALE
                        </button>
                        <div className="absolute right-3 top-8 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <Link to={`/products/${data?.id}`}>
                                <ShoppingCartOutlined className="text-2xl" />
                            </Link>
                            <HeartOutlined className="text-2xl" />
                        </div>
                    </div>
                    <div className="pt-3">
                        <h5 className="mb-2 text-xl font-medium leading-tight">
                            {data?.name}
                        </h5>

                        <div
                            className=""
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                        >
                            {formatNumber(pro?.variants[0]?.price)} đ
                        </div>
                        <p className="text-base">{data?.description}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProductInListProductBuy3
