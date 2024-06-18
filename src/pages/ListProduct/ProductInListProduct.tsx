import { Link } from "react-router-dom"
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import formatNumber from "@/utilities/FormatTotal"
const ProductInListProduct = ({ data }: any) => {
    return (
        <>
            <Link to={`/products/${data?.id}`}>
                <div className="custom-card-hover card group relative border-gray-200 p-2 hover:border">
                    <div className="absolute bottom-60 right-2 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <ShoppingCartOutlined className="icon-heart ml-2 text-xl" />
                        <HeartOutlined className="icon-heart ml-2 text-xl" />
                    </div>

                    <img src={data?.image} style={{ height: "200px" }} />

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
                            {formatNumber(data?.variants[0]?.price)} đ
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
