import { useEffect, useState } from "react"
import { Image, InputNumber, InputNumberProps, Rate } from "antd"
import {
    CarryOutOutlined,
    HddOutlined,
    HeartOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons"
import { useParams } from "react-router-dom"
import { getProductById } from "@/api/services/ProductService"
import CategoryInProductDetail from "./CategoryInProductDetail"
import { useDispatch } from "react-redux"
import { AttributeValue } from "@/@types/product"
import {
    getAllAttribute,
    getAllAttributeValue,
} from "@/api/services/AttributeService"
const ProductDetail = () => {
    const dispatch = useDispatch()
    const { id }: any = useParams()
    const carts = JSON.parse(localStorage.getItem("cart") || "[]")
    const [product, setProduct] = useState<any>()
    const fetchProducts = async () => {
        const product = await dispatch(getProductById(id) as any)
        setProduct(product)
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    const [colors, setColors] = useState<AttributeValue[]>([])
    const [sizes, setSizes] = useState<AttributeValue[]>([])

    useEffect(() => {
        fetchAttributeValues()
    }, [])

    const fetchAttributeValues = async () => {
        try {
            const [attributes, attributeValues] = await Promise.all([
                getAllAttribute(),
                getAllAttributeValue(),
            ])

            const attributeValueMap = {}

            attributeValues.forEach((value) => {
                if (!attributeValueMap[value.attribute_id]) {
                    attributeValueMap[value.attribute_id] = []
                }
                attributeValueMap[value.attribute_id].push(value)
            })

            const colors = findAttributeValues(
                attributes,
                attributeValueMap,
                "color",
            )
            const sizes = findAttributeValues(attributes, attributeValueMap, "size")

            setColors(colors)
            setSizes(sizes)
        } catch (error) {
            console.error("Failed to fetch attribute values:", error)
        }
    }
    const findAttributeValues = (attributes, attributeValueMap, attributeName) => {
        const attribute = attributes.find(
            (attr) => attr.name.toLowerCase() === attributeName.toLowerCase(),
        )
        if (attribute) {
            const attributeId = attribute._id
            return attributeValueMap[attributeId] || []
        }
        return []
    }

    const onChange: InputNumberProps["onChange"] = (value) => {
        console.log("changed", value)
    }

    return (
        <>
            <div className="flex pl-40 pr-40 pt-5 ">
                <div className="flex w-2/3 ">
                    <div className="thumbnails ml-10 mr-10">
                        <Image
                            className=""
                            src={product?.image}
                            alt="Selected"
                            style={{
                                width: "100%",
                                maxWidth: "750px",
                                maxHeight: "966px",
                            }}
                        />
                    </div>
                </div>
                <div className="w-1.6/3 ">
                    <div className="flex">
                        {product?.sale_id ? (
                            <button className="rounded bg-red-500 pl-2 pr-2 text-white">
                                Sale
                            </button>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="mt-3 text-xl font-bold">{product?.name}</div>
                    <span>SKU: F9UVC020M-015</span>
                    <div className="mt-4 flex">
                        <span>
                            <Rate defaultValue={5} />
                        </span>
                    </div>
                    <CategoryInProductDetail data={product?.category} />

                    <hr className="my-4  w-full border-t border-dashed border-gray-400" />
                    <span className="text-sm font-bold">MÀU SẮC</span>
                    <div className="mb-2 mt-2 grid grid-cols-8 justify-center">
                        {colors.map((color: AttributeValue) => (
                            <button
                                className="m-1 mx-1 h-8 w-8 rounded-full border border-gray-400 "
                                key={color?.id}
                                style={{ backgroundColor: `${color?.value}` }}
                            ></button>
                        ))}
                    </div>

                    <span className="text-sm font-bold">KÍCH THƯỚC</span>
                    <div className="mt-2 grid grid-cols-5 justify-center">
                        {sizes.map((size: AttributeValue) => (
                            <button
                                className="mx-2 rounded-xl border border-gray-400 px-5"
                                key={size?.id}
                            >
                                {size?.value}
                            </button>
                        ))}
                    </div>
                    <div className="mb-5 mt-6 flex">
                        <span className="text-sm font-bold ">CHỌN SỐ LƯỢNG</span>
                        <div className="ml-auto flex items-center">
                            <InputNumber
                                min={1}
                                max={10}
                                defaultValue={10}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className=" flex">
                        <button
                            className="w-2/4 rounded border  border-red-400 p-2"
                            style={{ color: "red" }}
                            onClick={() => HandleAddtoCart()}
                        >
                            <ShoppingCartOutlined style={{ color: "red" }} /> Thêm
                            giỏ hàng
                        </button>
                        <button
                            className=" ml-2 w-2/4 rounded bg-red-500 p-2"
                            style={{ color: "white" }}
                        >
                            <CarryOutOutlined style={{ color: "white" }} /> Mua ngay
                        </button>
                    </div>
                    <button
                        className="mt-3 w-full rounded  border border-black p-2"
                        style={{ color: "black" }}
                    >
                        <HddOutlined style={{ color: "black" }} /> Mua tại quầy
                    </button>
                </div>
            </div>
            <div className=" pb-20 pl-80 pr-80 pt-20">
                <span className="text-sl font-bold">MÔ TẢ SẢN PHẨM</span>
                <hr className="my-4  w-full border-t border-dashed border-gray-400" />
                <p>{product?.description}</p>
            </div>
            <div className=" pb-20 pl-40 pr-40">
                <span className="text-sl font-bold">ĐÁNH GIÁ TỪ NGƯỜI MUA</span>
                <hr className="my-4  w-full border-t border-dashed border-gray-400" />
                <div className="flex">
                    <div style={{ textAlign: "center" }} className="w-1/6">
                        <p style={{ fontSize: "50px", fontWeight: "600" }}>
                            4.8
                            <span style={{ fontSize: "40px", fontWeight: "normal" }}>
                                /
                            </span>
                            <span style={{ fontSize: "30px", fontWeight: "normal" }}>
                                5
                            </span>
                        </p>
                        <Rate disabled defaultValue={5} />
                        <p>5 đánh giá</p>
                    </div>
                    <div className="flex flex-col">
                        <Rate disabled defaultValue={5} />
                        <Rate disabled defaultValue={4} />
                        <Rate disabled defaultValue={3} />
                        <Rate disabled defaultValue={2} />
                        <Rate disabled defaultValue={1} />
                    </div>
                </div>
                <hr className="my-4 w-full transform border-t border-dashed border-gray-400 " />
                <div>
                    <span className="text-sm font-bold">Lọc đánh giá</span>
                    <button className="bg-white-500 m-1 mx-1 ml-5 h-10 w-20 border border-red-500 text-red-500">
                        Tất cả
                    </button>
                    <button className="m-1 mx-1 h-10 w-20 bg-gray-200 ">
                        5 sao
                    </button>
                    <button className="m-1 mx-1 h-10 w-20 bg-gray-200 ">
                        4 sao
                    </button>
                    <button className="m-1 mx-1 h-10 w-20  bg-gray-200 ">
                        3 sao
                    </button>
                    <button className="m-1 mx-1 h-10 w-20  bg-gray-200 ">
                        2 sao
                    </button>
                    <button className="m-1 mx-1 h-10 w-20  bg-gray-200 ">
                        1 sao
                    </button>
                </div>
                <hr className="my-4 w-full transform border-t border-dashed border-gray-400 " />
                <div>
                    <div className="flex">
                        <button className="m-1 mx-1 h-10 w-10 rounded-full bg-black"></button>
                        <div className="ml-2 flex flex-col">
                            <a className="font-bold">liennk89</a>
                            <Rate
                                disabled
                                defaultValue={5}
                                style={{ fontSize: "12px" }}
                            />
                        </div>
                    </div>
                    <div className="ml-14 flex flex-col">
                        <span className="mt-2 text-sm text-gray-400">
                            Màu sắc: Xanh-10, Kích thước: L
                        </span>
                        <span className="mt-4 text-sm">
                            Shop giao hàng nhanh, áo không dày quá mặc lên thoáng, đi
                            đường gió thổi vào mát mát á. 1m62, 58kg, mặc size L vẫn
                            rộng nhé
                        </span>
                        <div className="mt-4 flex">
                            <Image
                                src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FF9UVC020M-014%2Ffeabdc18be4641d6a438dfc8fd8b1389_optimized_original_image.jpg&w=1920&q=75"
                                className=" h-12 p-2"
                                style={{ width: "120px" }}
                            />
                            <Image
                                src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FF9UVC020M-014%2Ffeabdc18be4641d6a438dfc8fd8b1389_optimized_original_image.jpg&w=1920&q=75"
                                className=" h-32 p-2"
                                style={{ width: "120px" }}
                            />
                            <Image
                                src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FF9UVC020M-014%2Ffeabdc18be4641d6a438dfc8fd8b1389_optimized_original_image.jpg&w=1920&q=75"
                                className=" h-32 p-2"
                                style={{ width: "120px" }}
                            />
                        </div>
                    </div>

                    <hr className="my-4 w-full transform border-t border-dashed border-gray-400 " />
                </div>
                <div>
                    <div className="flex">
                        <button className="m-1 mx-1 h-10 w-10 rounded-full bg-black"></button>
                        <div className="ml-2 flex flex-col">
                            <a className="font-bold">liennk89</a>
                            <Rate
                                disabled
                                defaultValue={5}
                                style={{ fontSize: "12px" }}
                            />
                        </div>
                    </div>
                    <div className="ml-14 flex flex-col">
                        <span className="mt-2 text-sm text-gray-400">
                            Màu sắc: Xanh-10, Kích thước: L
                        </span>
                        <span className="mt-4 text-sm">
                            Shop giao hàng nhanh, áo không dày quá mặc lên thoáng, đi
                            đường gió thổi vào mát mát á. 1m62, 58kg, mặc size L vẫn
                            rộng nhé
                        </span>
                        <div className="mt-4 flex">
                            <Image
                                src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FF9UVC020M-014%2Ffeabdc18be4641d6a438dfc8fd8b1389_optimized_original_image.jpg&w=1920&q=75"
                                className=" h-12 p-2"
                                style={{ width: "120px" }}
                            />
                            <Image
                                src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FF9UVC020M-014%2Ffeabdc18be4641d6a438dfc8fd8b1389_optimized_original_image.jpg&w=1920&q=75"
                                className=" h-32 p-2"
                                style={{ width: "120px" }}
                            />
                            <Image
                                src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FF9UVC020M-014%2Ffeabdc18be4641d6a438dfc8fd8b1389_optimized_original_image.jpg&w=1920&q=75"
                                className=" h-32 p-2"
                                style={{ width: "120px" }}
                            />
                        </div>
                    </div>

                    <hr className="my-4 w-full transform border-t border-dashed border-gray-400 " />
                </div>
                <div>
                    <div className="flex">
                        <button className="m-1 mx-1 h-10 w-10 rounded-full bg-black"></button>
                        <div className="ml-2 flex flex-col">
                            <a className="font-bold">liennk89</a>
                            <Rate
                                disabled
                                defaultValue={5}
                                style={{ fontSize: "12px" }}
                            />
                        </div>
                    </div>
                    <div className="ml-14 flex flex-col">
                        <span className="mt-2 text-sm text-gray-400">
                            Màu sắc: Xanh-10, Kích thước: L
                        </span>
                        <span className="mt-4 text-sm">
                            Shop giao hàng nhanh, áo không dày quá mặc lên thoáng, đi
                            đường gió thổi vào mát mát á. 1m62, 58kg, mặc size L vẫn
                            rộng nhé
                        </span>
                        <div className="mt-4 flex">
                            <Image
                                src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FF9UVC020M-014%2Ffeabdc18be4641d6a438dfc8fd8b1389_optimized_original_image.jpg&w=1920&q=75"
                                className=" h-12 p-2"
                                style={{ width: "120px" }}
                            />
                            <Image
                                src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FF9UVC020M-014%2Ffeabdc18be4641d6a438dfc8fd8b1389_optimized_original_image.jpg&w=1920&q=75"
                                className=" h-32 p-2"
                                style={{ width: "120px" }}
                            />
                            <Image
                                src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FF9UVC020M-014%2Ffeabdc18be4641d6a438dfc8fd8b1389_optimized_original_image.jpg&w=1920&q=75"
                                className=" h-32 p-2"
                                style={{ width: "120px" }}
                            />
                        </div>
                    </div>

                    <hr className="my-4 w-full transform border-t border-dashed border-gray-400 " />
                </div>
                <div>
                    <div className="flex">
                        <button className="m-1 mx-1 h-10 w-10 rounded-full bg-black"></button>
                        <div className="ml-2 flex flex-col">
                            <a className="font-bold">liennk89</a>
                            <Rate
                                disabled
                                defaultValue={5}
                                style={{ fontSize: "12px" }}
                            />
                        </div>
                    </div>
                    <div className="ml-14 flex flex-col">
                        <span className="mt-2 text-sm text-gray-400">
                            Màu sắc: Xanh-10, Kích thước: L
                        </span>
                        <span className="mt-4 text-sm">
                            Shop giao hàng nhanh, áo không dày quá mặc lên thoáng, đi
                            đường gió thổi vào mát mát á. 1m62, 58kg, mặc size L vẫn
                            rộng nhé
                        </span>
                        <div className="mt-4 flex">
                            <Image
                                src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FF9UVC020M-014%2Ffeabdc18be4641d6a438dfc8fd8b1389_optimized_original_image.jpg&w=1920&q=75"
                                className=" h-12 p-2"
                                style={{ width: "120px" }}
                            />
                            <Image
                                src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FF9UVC020M-014%2Ffeabdc18be4641d6a438dfc8fd8b1389_optimized_original_image.jpg&w=1920&q=75"
                                className=" h-32 p-2"
                                style={{ width: "120px" }}
                            />
                            <Image
                                src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FF9UVC020M-014%2Ffeabdc18be4641d6a438dfc8fd8b1389_optimized_original_image.jpg&w=1920&q=75"
                                className=" h-32 p-2"
                                style={{ width: "120px" }}
                            />
                        </div>
                    </div>

                    <hr className="my-4 w-full transform border-t border-dashed border-gray-400 " />
                </div>
            </div>
            <div className=" pb-20 pl-40 pr-40">
                <span className="font-bold">SẢN PHẨM GỢI Ý</span>
                <div className="block-new-product-item mt-5 grid grid-cols-1 gap-4 md:grid-cols-5">
                    <div className="group relative">
                        <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat">
                            <img
                                src={
                                    "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162866319763913_512.jpg&w=1920&q=75"
                                }
                                alt=""
                            />
                            <div className="absolute bottom-52 right-2 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <ShoppingCartOutlined className="text-xl" />
                                <HeartOutlined className="text-xl" />
                            </div>
                        </div>
                        <div className="pt-3">
                            <h5 className="mb-2 text-xl font-medium leading-tight">
                                Product 1
                            </h5>
                            <p className="text-base">description</p>
                        </div>
                    </div>
                    <div className="group relative">
                        <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat">
                            <img
                                src={
                                    "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162866319763913_512.jpg&w=1920&q=75"
                                }
                                alt=""
                            />
                            <div className="absolute bottom-52 right-2 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <ShoppingCartOutlined className="text-xl" />
                                <HeartOutlined className="text-xl" />
                            </div>
                        </div>
                        <div className="pt-3">
                            <h5 className="mb-2 text-xl font-medium leading-tight">
                                Product 1
                            </h5>
                            <p className="text-base">description</p>
                        </div>
                    </div>
                    <div className="group relative">
                        <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat">
                            <img
                                src={
                                    "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162866319763913_512.jpg&w=1920&q=75"
                                }
                                alt=""
                            />
                            <div className="absolute bottom-52 right-2 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <ShoppingCartOutlined className="text-xl" />
                                <HeartOutlined className="text-xl" />
                            </div>
                        </div>
                        <div className="pt-3">
                            <h5 className="mb-2 text-xl font-medium leading-tight">
                                Product 1
                            </h5>
                            <p className="text-base">description</p>
                        </div>
                    </div>
                    <div className="group relative">
                        <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat">
                            <img
                                src={
                                    "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162866319763913_512.jpg&w=1920&q=75"
                                }
                                alt=""
                            />
                            <div className="absolute bottom-52 right-2 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <ShoppingCartOutlined className="text-xl" />
                                <HeartOutlined className="text-xl" />
                            </div>
                        </div>
                        <div className="pt-3">
                            <h5 className="mb-2 text-xl font-medium leading-tight">
                                Product 1
                            </h5>
                            <p className="text-base">description</p>
                        </div>
                    </div>
                    <div className="group relative">
                        <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat">
                            <img
                                src={
                                    "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162866319763913_512.jpg&w=1920&q=75"
                                }
                                alt=""
                            />
                            <div className="absolute bottom-52 right-2 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <ShoppingCartOutlined className="text-xl" />
                                <HeartOutlined className="text-xl" />
                            </div>
                        </div>
                        <div className="pt-3">
                            <h5 className="mb-2 text-xl font-medium leading-tight">
                                Product 1
                            </h5>
                            <p className="text-base">description</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
