import Footer from "@/Components/Footer/Footer"
import Header from "@/Components/Header/Header"
import { Outlet } from "react-router-dom"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

function UnAuthLayout() {
  return (
    <>
      <Header />
      <div className="container pt-2 pb-10">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default UnAuthLayout
