import { ClearOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import formatNumber from "../../utilities/FormatTotal"
import { toast } from "react-toastify"

const ProductInCart = ({ data, index }: any) => {
    const [carts, setCarts] = useState([])
    const [displayQuantity, setDisplayQuantity] = useState(data.quantity)
    const [setcheck] = useState<any>(false)
    const sumtotal = data?.price * displayQuantity
    useEffect(() => {
        const storedCarts = JSON.parse(localStorage.getItem("cart")!) || []
        setCarts(storedCarts)
    }, [carts])
    const handleDecrease = (id: any) => {
        let updatedCarts: any = [...carts]
        const index = updatedCarts.findIndex((item: any) => item.id === id)
        if (index !== -1) {
            if (updatedCarts[index].quantity > 1) {
                updatedCarts[index].quantity--
            } else {
                const check = confirm("Bạn có muốn xóa?")
                if (check == true) {
                    updatedCarts = updatedCarts.filter((item: any) => item.id !== id)
                    window.location.href = "/cart"
                }
            }
            setDisplayQuantity(updatedCarts[index].quantity)
            localStorage.setItem("cart", JSON.stringify(updatedCarts))
            setcheck(true)
        } else {
            return
        }
    }

    const handleIncrease = (id: any) => {
        const updatedCarts: any = [...carts]
        const index = updatedCarts.findIndex((item: any) => item.id === id)
        if (index !== -1) {
            updatedCarts[index].quantity++
            setDisplayQuantity(updatedCarts[index].quantity)
            localStorage.setItem("cart", JSON.stringify(updatedCarts))
            setcheck(true)
        } else {
            return
        }
    }
    const HandleRemove = (productToRemove: any) => {
        console.log(productToRemove)
        const check = confirm("Bạn có muốn xóa?")
        if (check == true) {
            const carts = JSON.parse(localStorage.getItem("cart")!) || []
            const updatedCart = carts.filter(
                (item: any) => item.id !== productToRemove,
            )
            console.log(JSON.stringify(updatedCart))
            localStorage.setItem("cart", JSON.stringify(updatedCart))
            toast.success("Bạn đã xóa sản phẩm đó khỏi giỏ hàng!")
            // setTimeout(() => {
            //     window.location.reload()
            // }, 1000)
        }
    }
    return (
        <>
            <tr ng-repeat="item in cart" className="relative pb-20">
                <td className="pt-5 font-normal">{index + 1}</td>
                <td className="pt-5 font-normal">
                    <img src={data?.image} width="90px" />
                </td>
                <td className="pl-8 pr-8 pt-0 font-normal">
                    <p
                        style={{
                            fontWeight: "400",
                            paddingBottom: "7px",
                            fontSize: "16px",
                        }}
                    >
                        {data?.name_product}
                    </p>
                    <p style={{ fontSize: "14px" }}>
                        Kích thước: {data?.size}
                        <br />
                        Màu sắc: {data?.color}
                    </p>
                </td>
                <td className="pl-5 pr-5 font-normal">
                    {formatNumber(data?.price)}đ
                </td>
                <td className="pl-4 pr-4 font-normal">
                    <div className="flex items-center">
                        <button
                            className="h-8 w-8 cursor-pointer select-none rounded border px-2 py-1 text-center text-gray-700 hover:bg-gray-200 focus:outline-none"
                            onClick={() => handleDecrease(data?.id)}
                        >
                            -
                        </button>
                        <input
                            type="number"
                            className="w-15 h-8 cursor-pointer select-none rounded border px-2 py-1 text-center text-gray-700 hover:bg-gray-200 focus:outline-none "
                            min="1"
                            max="9"
                            value={displayQuantity}
                        />
                        <button
                            className="h-8 w-8 cursor-pointer select-none rounded border px-2 py-1 text-center text-gray-700 hover:bg-gray-200 focus:outline-none"
                            onClick={() => handleIncrease(data?.id)}
                        >
                            +
                        </button>
                    </div>
                </td>
                <td className="pl-4 pr-4 font-bold">{formatNumber(sumtotal)}đ</td>
                <td className="pl-4">
                    <ClearOutlined
                        className="bg-white p-2 text-red-500"
                        onClick={() => HandleRemove(data?.id)}
                    />
                </td>
            </tr>
        </>
    )
}

export default ProductInCart
