import banner from "@/assets/images/banner/banner.webp"
import { useEffect } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
function HomePage() {
  useEffect(() => {
    document.title =
      "TokyoLife.vn | Hàng tiêu dùng Nhật Bản &  thời trang thông minh"
  }, [])
  return (
    <div className="">
      <div className="banner mt-5">
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
            <img src={banner} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="">
        <h1>hompage</h1>
        <h1>hompage</h1>
        <h1>hompage</h1>
        <h1>hompage</h1>
        <h1>hompage</h1>
        <h1>hompage</h1>
        <h1>hompage</h1>
        <h1>hompage</h1>
        <h1>hompage</h1>
        <h1>hompage</h1>
        <h1>hompage</h1>
        <h1>hompage</h1>
      </div>
      <div className="bg-red-600 text-white p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">TOKYOLIFE</h1>
        <p className="italic text-center mb-4">
          <span className="text-lg font-semibold">
            TokyoLife trân trọng cảm ơn Quý Khách đã ủng hộ và góp phần tạo thêm cơ
            hội việc làm cho 142 người khuyết tật.
          </span>
        </p>
        <p className="text-center leading-relaxed max-w-4xl">
          TokyoLife là cửa hàng bán lẻ đồ gia dụng, hóa mỹ phẩm, phụ kiện chính hãng
          các thương hiệu Nhật Bản: Inomata, Ebisu, ORP Tokyo, Momotani, Naturie,
          Rohto (Hada Labo, Melano CC...), Kose (Dòng Softymo), Shiseido (Dòng Senka,
          Anessa, Tsubaki, Uno, D.Program), KAO (Biore, Laurier), Rosette, Unicharm,
          Rocket, Naris, Meishoku, Chuchu Baby, Deonatulle, Kumano, Taiyo Brush,
          Okamura, Dentultra, KAI, Pelican... Nước hoa TokyoLife sản xuất tại Pháp.
          Hóa phẩm lành tính TokyoLife sản xuất tại Nhật Bản. Mỹ phẩm TokyoLife sản
          xuất tại Nhật Bản, Hàn Quốc. Sản phẩm Thời trang và Phụ kiện hiệu:
          TokyoLife, TokyoNow, TokyoBasic, TokyoSmart, TokyoSecret. Sản phẩm tiêu
          dùng hiệu: TokyoLife, TokyoHome, TokyoSword... và nhiều thương hiệu khác
          sản xuất tại Việt Nam, Trung Quốc, Thái Lan...
        </p>
      </div>
    </div>
  )
}

export default HomePage
