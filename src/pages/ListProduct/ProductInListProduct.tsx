import { Product } from "@/@types/product"
import { Link } from "react-router-dom"
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons"
type Props = {
    data: Product
}
const ProductInListProduct = ({ data }: Props) => {
    return (
        <>
            {" "}
            <Link to={`/products/${data?.id}`}>
                <div className="custom-card-hover group card relative">
                    <div className="absolute bottom-64 right-2 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <ShoppingCartOutlined className="icon-heart ml-2 text-xl" />
                        <HeartOutlined className="icon-heart ml-2 text-xl" />
                    </div>

                    <img
                        src={
                            "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162866319763913_512.jpg&w=1920&q=75"
                        }
                        style={{ height: "250px" }}
                    />

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
                            100.000 đ
                            {/* {data?.sale > 0 ? (
                            <>
                                <span className="text-sm font-normal line-through opacity-50">
                                    {formatNumber(data?.price)}đ
                                </span>
                                <p>
                                    {formatNumber(
                                        data?.price -
                                            (data?.price * data?.sale) / 100,
                                    )}
                                    đ{" "}
                                    <span className="ml-2 rounded bg-red-500 px-1 py-1 text-sm font-normal text-white">
                                        -{data?.sale}%
                                    </span>
                                </p>
                            </>
                        ) : (
                            <>{formatNumber(data?.price)}đ</>
                        )} */}
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
