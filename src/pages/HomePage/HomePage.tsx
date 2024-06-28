import { Category } from "@/@types/category"
import { Product } from "@/@types/product"
import { getAllCategory } from "@/api/services/CategoryService"
import { getAllProduct } from "@/api/services/ProductService"
import banner from "@/assets/images/banner/banner.webp"
import storebg from "@/assets/images/store-bg.jpg"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import ProductNewInHomePage from "./ProductNewInHomePage"
import ListProductBuy3 from "./ListProductBuy3"
import thumbnail1 from "@/assets/images/block-item-1.webp"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store/store"
function HomePage() {
    const [categories, setCategories] = useState<Category[]>([])
    const dispatch = useDispatch()
    const products = useSelector((state: RootState) => state.products.products)
    useEffect(() => {
        const fetchCategory = async () => {
            const allCategory: Category[] = await getAllCategory()
            setCategories(allCategory)
        }

        fetchCategory()
    }, [])

    useEffect(() => {
        dispatch(getAllProduct() as any)
    }, [dispatch])

    useEffect(() => {
        document.title =
            "TokyoLife.vn | Hàng tiêu dùng Nhật Bản & thời trang thông minh"
    }, [])

    return (
        <>
            <div className="mx-auto mt-5 max-w-7xl justify-center">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                >
                    <SwiperSlide className="">
                        <img src={banner} alt="Banner" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={banner} alt="Banner" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={banner} alt="Banner" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="block-item mx-auto mt-14 max-w-7xl items-center justify-center">
                <div className="block-product-name-inner-home flex justify-center text-3xl font-semibold uppercase text-red-600">
                    Mua gì hôm nay?
                </div>
                <div className="block-product-image-home flex w-full space-x-4 overflow-x-auto p-5">
                    {categories.map((category) => (
                        <div key={category.id} className="w-1/6">
                            <a href="#">
                                <div className="thumbnail m-4">
                                    <img
                                        src={thumbnail1}
                                        alt=""
                                        className="h-auto w-full rounded-full"
                                    />
                                </div>
                                <div className="thumbnail-name my-2">
                                    <p className="text-center text-2xl font-medium">
                                        {category.name}
                                    </p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="block-offer-online container mx-auto my-10 flex max-w-7xl flex-col justify-center">
                <div className="flex justify-center text-3xl font-semibold uppercase text-red-600">
                    Sản phẩm giảm giá
                </div>
                <ListProductBuy3 />
            </div>
            <div className="block-new-product container mx-auto my-2 flex max-w-7xl flex-col">
                <div className="block-new-product-title my-4 text-center text-3xl font-semibold uppercase text-red-600">
                    Sản phẩm mới ra mắt
                </div>
                <div className="block-new-product-item grid grid-cols-1 gap-4 md:grid-cols-5">
                    {products?.map((product: Product) => (
                        <ProductNewInHomePage data={product} key={product.id} />
                    ))}
                </div>
                <div className="block-offer-button my-5 text-center">
                    <button className="btn h-10 rounded border bg-red-500 px-2 pl-5 pr-5 text-white">
                        <Link to="/products">Xem tất cả sản phẩm</Link>
                    </button>
                </div>
            </div>
            <div className="relative mx-auto my-5 max-w-7xl">
                <div className="relative flex flex-col sm:flex-row">
                    <img
                        src={storebg}
                        className="w-full sm:flex"
                        style={{ height: "600px" }}
                        alt="Store background"
                    />
                    <div className="group-text absolute left-0 top-1/2 flex w-1/2 -translate-y-1/2 transform flex-col items-start justify-start gap-3 px-10">
                        <h4>HỆ THỐNG CỬA HÀNG</h4>
                        <h3 className="font-bold">
                            <span className="text-red-600">TOKYOLIFE</span> CÓ HỆ
                            THỐNG CỬA HÀNG <br /> TRÊN TOÀN VIỆT NAM
                        </h3>
                        <p>
                            Trải dài trên khắp Việt Nam, TokyoLife mang đến cuộc sống
                            hiện đại,
                            <br /> thông minh và chất lượng hơn tới hàng triệu người
                            tiêu dùng Việt.
                        </p>
                        <button className="btn rounded bg-red-600 px-5 py-2 text-white">
                            Xem Vị Trí Cửa Hàng
                        </button>
                    </div>
                </div>
            </div>
            <div className="mx-auto my-10 flex w-full max-w-7xl flex-col items-center bg-red-600 p-8 text-white">
                <h1 className="mb-4 text-3xl font-bold">TOKYOLIFE</h1>
                <p className="mb-4 text-center italic">
                    <span className="text-lg font-semibold">
                        TokyoLife trân trọng cảm ơn Quý Khách đã ủng hộ và góp phần
                        tạo thêm cơ hội việc làm cho 142 người khuyết tật.
                    </span>
                </p>
                <p className="max-w-4xl text-center leading-relaxed">
                    TokyoLife là cửa hàng bán lẻ đồ gia dụng, hóa mỹ phẩm, phụ kiện
                    chính hãng các thương hiệu Nhật Bản: Inomata, Ebisu, ORP Tokyo,
                    Momotani, Naturie, Rohto (Hada Labo, Melano CC...), Kose (Dòng
                    Softymo), Shiseido (Dòng Senka, Anessa, Tsubaki, Uno, D.Program),
                    KAO (Biore, Laurier), Rosette, Unicharm, Rocket, Naris, Meishoku,
                    Chuchu Baby, Deonatulle, Kumano, Taiyo Brush, Okamura, Dentultra,
                    KAI, Pelican... Nước hoa TokyoLife sản xuất tại Pháp. Hóa phẩm
                    lành tính TokyoLife sản xuất tại Nhật Bản. Mỹ phẩm TokyoLife sản
                    xuất tại Nhật Bản, Hàn Quốc. Sản phẩm Thời trang và Phụ kiện
                    hiệu: TokyoLife, TokyoNow, TokyoBasic, TokyoSmart, TokyoSecret.
                    Sản phẩm tiêu dùng hiệu: TokyoLife, TokyoHome, TokyoSword... và
                    nhiều thương hiệu khác sản xuất tại Việt Nam, Trung Quốc, Thái
                    Lan...
                </p>
            </div>
        </>
    )
}

export default HomePage
