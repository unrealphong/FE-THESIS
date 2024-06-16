import { Product } from "@/@types/product"
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
type Props = {
    data: Product
}
const ProductNewInHomePage = ({ data }: Props) => {
    return (
        <>
            <Link to={`/products/${data?.id}`}>
                <div className="group relative">
                    <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                            src={
                                "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162866319763913_512.jpg&w=1920&q=75"
                            }
                            alt=""
                        />
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
                            100.000 đ
                        </div>
                        <p className="text-base">{data?.description}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProductNewInHomePage
