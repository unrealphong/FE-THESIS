import { Button, Result } from "antd"
import { useState } from "react"
import { Link } from "react-router-dom"

const OrderDone = () => {
    const [title, settitle] = useState("Bạn Đã Đặt Hàng Thành Công!")
    return (
        <>
            <div className=" mb-10 ml-40 mr-40 mt-10 bg-gray-100">
                <div className="row d-flex cart align-items-center justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row g-0">
                                <Result
                                    status="success"
                                    //   status={status}
                                    title={title}
                                    extra={[
                                        <Link to="/">
                                            <Button type="primary" key="console">
                                                Trang chủ
                                            </Button>
                                        </Link>,
                                        <Link to={`/orderdetail`}>
                                            <Button key="buy">
                                                Xem chi tiết đơn hàng
                                            </Button>
                                        </Link>,
                                    ]}
                                />
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderDone
