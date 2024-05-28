import Footer from "@/Components/Footer/Footer"
import Header from "@/Components/Header/Header"
import { Outlet } from "react-router-dom"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

function UnAuthLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default UnAuthLayout
