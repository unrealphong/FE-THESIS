import Header from "@/Components/Header/Header"
import { Outlet } from "react-router-dom"

function UnAuthLayout() {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default UnAuthLayout
