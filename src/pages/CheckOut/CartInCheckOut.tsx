import ProductInCartCheckOut from "./ProductInCartCheckOut"

const CartInCheckOut = () => {
    const carts = JSON.parse(localStorage.getItem("cart")!)
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
                        {carts?.map((data, index) => {
                            return (
                                <>
                                    <ProductInCartCheckOut
                                        data={data}
                                        index={index}
                                        key={data?.id}
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