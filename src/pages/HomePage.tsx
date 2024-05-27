import banner from "@/assets/images/banner/banner.webp"
import thumbnail1 from "@/assets/images/block-item-1.webp"
import thumbnail2 from "@/assets/images/block-item-2.webp"
import thumbnail3 from "@/assets/images/block-item-3.webp"
import thumbnail4 from "@/assets/images/block-item-4.webp"
import storebg from "@/assets/images/store-bg.jpg"
import { useEffect, useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
function HomePage() {
  const [activeTab, setActiveTab] = useState(1)

  const tabs = [
    { id: 1, label: "MUA 3 GIẢM 10%", content: "Tab 1 Content" },
    { id: 2, label: "SALE 50%", content: "Tab 2 Content" },
    { id: 3, label: "MUA 1 TẶNG 1", content: "Tab 3 Content" },
    { id: 4, label: "BÁN CHẠY NHẤT", content: "Tab 4 Content" },
  ]
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
      <div className="block-item justify-center mt-14">
        <div className="block-product-name-inner-home flex justify-center text-red-600 uppercase font-semibold text-3xl">
          Mua gì hôm nay?
        </div>
        <div className="block-product-image-home flex w-12/12 space-x-16 m-5">
          <div className="w-1/6">
            <a href="#">
              <div className="thumbnail my-2">
                <img src={thumbnail1} alt="" className="rounded-full" />
              </div>
              <div className="thumbnail-name my-2">
                <p className="text-2xl font-medium text-center">Áo thun nam</p>
              </div>
            </a>
          </div>
          <div className="w-1/6">
            <a href="#">
              <div className="thumbnail my-2">
                <img src={thumbnail2} alt="" className="rounded-full" />
              </div>
              <div className="thumbnail-name my-2">
                <p className="text-2xl font-medium text-center">Áo polo nam</p>
              </div>
            </a>
          </div>
          <div className="w-1/6">
            <a href="#">
              <div className="thumbnail my-2">
                <img src={thumbnail3} alt="" className="rounded-full" />
              </div>
              <div className="thumbnail-name my-2">
                <p className="text-2xl font-medium text-center">Áo chống nắng</p>
              </div>
            </a>
          </div>
          <div className="w-1/6">
            <a href="#">
              <div className="thumbnail my-2">
                <img src={thumbnail1} alt="" className="rounded-full" />
              </div>
              <div className="thumbnail-name my-2">
                <p className="text-2xl font-medium text-center">Áo thun nam</p>
              </div>
            </a>
          </div>
          <div className="w-1/6">
            <a href="#">
              <div className="thumbnail my-2">
                <img
                  src={thumbnail4}
                  className="w-40 h-40 rounded-full object-cover"
                />
              </div>

              <div className="thumbnail-name my-2">
                <p className="text-2xl font-medium text-center">Quần shorts nam</p>
              </div>
            </a>
          </div>
          <div className="w-1/6">
            <a href="#">
              <div className="thumbnail my-2">
                <img src={thumbnail2} alt="" className="rounded-full" />
              </div>
              <div className="thumbnail-name my-2">
                <p className="text-2xl font-medium text-center">Áo polo nam</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="block-offer-online my-10 flex flex-col justify-center">
        <div className="flex justify-center text-red-600 uppercase font-semibold text-3xl">
          Ưu đãi độc quyền online
        </div>
        <div className="block-offer-content">
          <div className="flex justify-center border-b-4 mb-4 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`cursor-pointer mx-4 py-2 text-md font-medium ${activeTab === tab.id ? "border-b-4 border-red-500 text-red-500" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="tab-content">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`${activeTab === tab.id ? "block" : "hidden"}`}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </div>
        <div className="block-offer-button text-center">
          <button className="button bg-red-500 text-white">
            <a href="#">Xem tất cả sản phẩm</a>
          </button>
        </div>
      </div>
      <div className="block-new-product flex flex-col my-2">
        <div className="block-new-product-title text-center text-red-600 uppercase font-semibold text-3xl my-4">
          Sản phẩm mới ra mắt
        </div>
        <div className="block-new-product-item grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="tw-card block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="relative overflow-hidden bg-cover bg-no-repeat h-100">
              <img
                src="https://gapprod.a.bigcontent.io/v1/static/SP246077_NA_img_MOB"
                alt=""
              />
            </div>
            <div className="pt-3">
              <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
              <p className="text-base">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="tw-card block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="relative overflow-hidden bg-cover bg-no-repeat h-100">
              <img
                src="https://gapprod.a.bigcontent.io/v1/static/SP246077_NA_img_MOB"
                alt=""
              />
            </div>
            <div className="pt-3">
              <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
              <p className="text-base">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="tw-card block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="relative overflow-hidden bg-cover bg-no-repeat h-100">
              <img
                src="https://gapprod.a.bigcontent.io/v1/static/SP246077_NA_img_MOB"
                alt=""
              />
            </div>
            <div className="pt-3">
              <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
              <p className="text-base">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="tw-card block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="relative overflow-hidden bg-cover bg-no-repeat h-100">
              <img
                src="https://gapprod.a.bigcontent.io/v1/static/SP246077_NA_img_MOB"
                alt=""
              />
            </div>
            <div className="pt-3">
              <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
              <p className="text-base">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="tw-card block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="relative overflow-hidden bg-cover bg-no-repeat h-100">
              <img
                src="https://gapprod.a.bigcontent.io/v1/static/SP246077_NA_img_MOB"
                alt=""
              />
            </div>
            <div className="pt-3">
              <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
              <p className="text-base">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="tw-card block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="relative overflow-hidden bg-cover bg-no-repeat h-100">
              <img
                src="https://gapprod.a.bigcontent.io/v1/static/SP246077_NA_img_MOB"
                alt=""
              />
            </div>
            <div className="pt-3">
              <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
              <p className="text-base">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="tw-card block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="relative overflow-hidden bg-cover bg-no-repeat h-100">
              <img
                src="https://gapprod.a.bigcontent.io/v1/static/SP246077_NA_img_MOB"
                alt=""
              />
            </div>
            <div className="pt-3">
              <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
              <p className="text-base">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="tw-card block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="relative overflow-hidden bg-cover bg-no-repeat h-100">
              <img
                src="https://gapprod.a.bigcontent.io/v1/static/SP246077_NA_img_MOB"
                alt=""
              />
            </div>
            <div className="pt-3">
              <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
              <p className="text-base">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="block-offer-button text-center">
          <button className="button bg-red-500 text-white">
            <a href="#">Xem tất cả sản phẩm</a>
          </button>
        </div>
      </div>
      <div className="my-5 relative">
        <div className="relative flex flex-col sm:flex-row">
          <img
            src={storebg}
            className="w-full sm:flex"
            style={{ height: "600px" }}
          />
          <div className="group-text flex flex-col gap-3 items-start justify-start absolute top-1/2 left-0 w-1/2 transform -translate-y-1/2">
            <h4>HỆ THỐNG CỬA HÀNG</h4>
            <h3 className="font-bold">
              <span className="text-red-600">TOKYOLIFE</span> CÓ HỆ THỐNG CỬA HÀNG{" "}
              <br /> TRÊN TOÀN VIỆT NAM
            </h3>
            <p>
              Trải dài trên khắp Việt Nam, TokyoLife mang đến cuộc sống hiện đại,
              <br /> thông minh và chất lượng hơn tới hàng triệu người tiêu dùng
              Việt.
            </p>
            <button className="bg-red-600 text-white px-5 py-2 rounded">
              Xem Vị Trí Cửa Hàng
            </button>
          </div>
        </div>
      </div>
      <div className="bg-red-600 text-white p-8 flex flex-col items-center mt-10">
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
