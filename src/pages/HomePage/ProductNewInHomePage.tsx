import formatNumber from "@/utilities/FormatTotal"
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

const ProductNewInHomePage = ({ data }: any) => {
    return (
        <>
            <Link to={`/products/${data?.id}`}>
                <div className="group relative">
                    <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat">
                        <img src={data?.image} alt="" />
                        <div className="absolute bottom-60 right-2 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <ShoppingCartOutlined className="text-xl" />
                            <HeartOutlined className="text-xl" />
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
                            {formatNumber(data?.variants[0]?.price)} đ
                        </div>
                        <p className="text-base">{data?.description}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProductNewInHomePage
