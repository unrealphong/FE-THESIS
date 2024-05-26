import Footer from "@/Components/Footer/Footer"
import Header from "@/Components/Header/Header"
import { Outlet } from "react-router-dom"

function UnAuthLayout() {
  return (
    <>
      <Header />
      <div className="h-[3000px]">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default UnAuthLayout
