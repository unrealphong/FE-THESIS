import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Sidebar from "../../components/Sidebar"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <main className="content">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  )
}
export default Dashboard
