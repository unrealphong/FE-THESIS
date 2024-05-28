import banner from "@/assets/images/banner/banner.webp"
import thumbnail1 from "@/assets/images/block-item-1.webp"
import thumbnail2 from "@/assets/images/block-item-2.webp"
import thumbnail3 from "@/assets/images/block-item-3.webp"
import thumbnail4 from "@/assets/images/block-item-4.webp"
import storebg from "@/assets/images/store-bg.jpg"
import { useEffect, useState } from "react"
import { Button } from "react-aria-components"
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
      <div className="block-item mx-auto mt-14 max-w-7xl items-center justify-center">
        <div className="block-product-name-inner-home flex justify-center text-3xl font-semibold uppercase text-red-600">
          Mua gì hôm nay?
        </div>
        <div className="block-product-image-home w-12/12 m-5 flex space-x-16">
          <div className="w-1/6">
            <a href="#">
              <div className="thumbnail my-2">
                <img
                  src={thumbnail1}
                  alt=""
                  className="h-40 w-40 rounded-full object-cover"
                />
              </div>
              <div className="thumbnail-name my-2">
                <p className="text-center text-2xl font-medium">Áo thun nam</p>
              </div>
            </a>
          </div>
          <div className="w-1/6">
            <a href="#">
              <div className="thumbnail my-2">
                <img
                  src={thumbnail2}
                  alt=""
                  className="h-40 w-40 rounded-full object-cover"
                />
              </div>
              <div className="thumbnail-name my-2">
                <p className="text-center text-2xl font-medium">Áo polo nam</p>
              </div>
            </a>
          </div>
          <div className="w-1/6">
            <a href="#">
              <div className="thumbnail my-2">
                <img
                  src={thumbnail3}
                  alt=""
                  className="h-40 w-40 rounded-full object-cover"
                />
              </div>
              <div className="thumbnail-name my-2">
                <p className="text-center text-2xl font-medium">Áo chống nắng</p>
              </div>
            </a>
          </div>
          <div className="w-1/6">
            <a href="#">
              <div className="thumbnail my-2">
                <img
                  src={thumbnail1}
                  alt=""
                  className="h-40 w-40 rounded-full object-cover"
                />
              </div>
              <div className="thumbnail my-2">
                <p className="text-center text-2xl font-medium">Áo thun nam</p>
              </div>
            </a>
          </div>
          <div className="w-1/6">
            <a href="#">
              <div className="thumbnail my-2">
                <img
                  src={thumbnail4}
                  className="h-40 w-40 rounded-full object-cover"
                />
              </div>

              <div className="thumbnail-name my-2">
                <p className="text-center text-2xl font-medium">Quần shorts nam</p>
              </div>
            </a>
          </div>
          <div className="w-1/6">
            <a href="#">
              <div className="thumbnail my-2">
                <img src={thumbnail2} alt="" className="h-40 w-40 rounded-full" />
              </div>
              <div className="thumbnail-name my-2">
                <p className="text-center text-2xl font-medium">Áo polo nam</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="block-offer-online container mx-auto my-10 flex max-w-7xl flex-col justify-center">
        <div className="flex justify-center text-3xl font-semibold uppercase text-red-600">
          Ưu đãi độc quyền online
        </div>
        <div className="block-offer-content">
          <div className="mb-4 mt-8 flex justify-center border-b-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`text-md mx-4 cursor-pointer py-2 font-medium ${activeTab === tab.id ? "border-b-4 border-red-500 text-red-500" : ""}`}
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
          <Button className="button h-10 rounded border bg-red-500 px-2 text-white">
            <a href="#">Xem tất cả sản phẩm</a>
          </Button>
        </div>
      </div>
      <div className="block-new-product container mx-auto my-2 flex max-w-7xl flex-col">
        <div className="block-new-product-title my-4 text-center text-3xl font-semibold uppercase text-red-600">
          Sản phẩm mới ra mắt
        </div>
        <div className="block-new-product-item grid grid-cols-1 gap-4 md:grid-cols-5">
          <div className="tw-card text-surface shadow-secondary-1 dark:bg-surface-dark block max-w-[18rem] rounded-lg bg-white dark:text-white">
            <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat">
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
          <div className="tw-card text-surface shadow-secondary-1 dark:bg-surface-dark block max-w-[18rem] rounded-lg bg-white dark:text-white">
            <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat">
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
          <div className="tw-card text-surface shadow-secondary-1 dark:bg-surface-dark block max-w-[18rem] rounded-lg bg-white dark:text-white">
            <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat">
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
          <div className="tw-card text-surface shadow-secondary-1 dark:bg-surface-dark block max-w-[18rem] rounded-lg bg-white dark:text-white">
            <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat">
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
          <div className="tw-card text-surface shadow-secondary-1 dark:bg-surface-dark block max-w-[18rem] rounded-lg bg-white dark:text-white">
            <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat">
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
          <div className="tw-card text-surface shadow-secondary-1 dark:bg-surface-dark block max-w-[18rem] rounded-lg bg-white dark:text-white">
            <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat">
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
          <div className="tw-card text-surface shadow-secondary-1 dark:bg-surface-dark block max-w-[18rem] rounded-lg bg-white dark:text-white">
            <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat">
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
          <div className="tw-card text-surface shadow-secondary-1 dark:bg-surface-dark block max-w-[18rem] rounded-lg bg-white dark:text-white">
            <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat">
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
        <div className="block-offer-button my-5 text-center">
          <Button className="h-10 rounded border bg-red-500 px-2 text-white">
            <a href="#">Xem tất cả sản phẩm</a>
          </Button>
        </div>
      </div>
      <div className="relative mx-auto my-5 max-w-7xl">
        <div className="relative flex flex-col sm:flex-row">
          <img
            src={storebg}
            className="w-full sm:flex"
            style={{ height: "600px" }}
          />
          <div className="group-text absolute left-0 top-1/2 flex w-1/2 -translate-y-1/2 transform flex-col items-start justify-start gap-3 px-10">
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
            <Button className="rounded bg-red-600 px-5 py-2 text-white">
              Xem Vị Trí Cửa Hàng
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-auto my-10 flex w-full max-w-7xl flex-col items-center bg-red-600 p-8 text-white">
        <h1 className="mb-4 text-3xl font-bold">TOKYOLIFE</h1>
        <p className="mb-4 text-center italic">
          <span className="text-lg font-semibold">
            TokyoLife trân trọng cảm ơn Quý Khách đã ủng hộ và góp phần tạo thêm cơ
            hội việc làm cho 142 người khuyết tật.
          </span>
        </p>
        <p className="max-w-4xl text-center leading-relaxed">
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
    </>
  )
}

export default HomePage
