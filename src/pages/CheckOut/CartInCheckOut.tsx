import { useEffect, useState } from "react"
import ProductInCartCheckOut from "./ProductInCartCheckOut"
import { getCartOrder } from "@/api/services/Order"

const CartInCheckOut = ({ onPriceBuy3 }: any) => {
    const [carts, setCarts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [cartt, setcart] = useState<any>()
    const handleCartUpdate = async () => {
        const storedCarts = JSON.parse(localStorage.getItem("cart")!) || []
        setCarts(storedCarts)
        const data = { data: storedCarts }
        const allCart: any = await getCartOrder(data)
        setcart(allCart)
        let total = 0
        let totalQuantity = 0
        storedCarts.forEach((item: any) => {
            totalQuantity += item.quantity
        })
        storedCarts.forEach((item: any, index: any) => {
            if (item.sale_id === 1 && totalQuantity === 3) {
                total += allCart?.data[index]?.price * item.quantity * 0.9
            } else if (item.sale_id === 2) {
                total += allCart?.data[index]?.price * item.quantity * 0.5
            } else {
                total += allCart?.data[index]?.price * item.quantity
            }
        })
        setTotalPrice(total)
    }
    useEffect(() => {
        handleCartUpdate()
    }, [])
    console.log(totalPrice)
    useEffect(() => {
        if (totalPrice) {
            onPriceBuy3(totalPrice)
        }
    }, [totalPrice])

    return (
        <>
            <div className="mt-5 bg-white p-5">
                <h5 className="text-xl font-bold">
                    Giỏ hàng
                    <span className="text-xs text-red-600">
                        ({carts.length}) sản phẩm
                    </span>
                </h5>
                <table className=" table-striped mt-5 table w-full">
                    <thead className="bg-gray-100">
                        <th className="pb-4 pt-4">STT</th>
                        <th className="pb-4 pt-4 text-sm">Ảnh</th>
                        <th className="pb-4 pt-4 text-sm">Sản Phẩm</th>
                        <th className="pb-4 pt-4 text-sm">Giá</th>
                        <th className="pb-4 pt-4 text-sm">Số Lượng</th>
                        <th className="pb-4 pt-4 text-sm">Tổng Tiền</th>
                    </thead>

                    <tbody>
                        <hr className="my-1 w-full border-t border-dashed border-white " />
                        {cartt?.data?.map((data: any, index: any) => {
                            return (
                                <>
                                    <ProductInCartCheckOut
                                        data={data}
                                        index={index}
                                        key={data?.id}
                                        quantity={carts[index]}
                                    />
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CartInCheckOut
