import { useEffect } from "react"

function HomePage() {
  useEffect(() => {
    document.title =
      "TokyoLife.vn | Hàng tiêu dùng Nhật Bản &  thời trang thông minh"
  }, [])
  return (
    <div className="container fixed-grid has-2-cols">
      <div className="grid">
        {/* <div className="cell">
          <button className="button" onClick={notify}>
            Notify !
          </button>
        </div>
        <div className="cell">
          <button className="button" onClick={notify}>
            Notify !
          </button>
        </div> */}
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
    </div>
  )
}

export default HomePage
