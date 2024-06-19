import formatNumber from "../../utilities/FormatTotal"

const ProductInCartCheckOut = ({ data, index }: any) => {
    return (
        <>
            <tr className="bg-gray-100">
                <td className="mt-5 text-center align-middle">{index + 1}</td>
                <td className="mt-5 flex items-center justify-center">
                    <img
                        src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75"
                        className="w-20"
                    />
                </td>
                <td className="ml-10 mr-10 mt-10 w-60 whitespace-normal text-center align-middle">
                    <h6>
                        <a href="#" className="text-sl font-bold">
                            {data?.name_product}
                        </a>
                    </h6>
                    <p className="mt-2">
                        Kích thước: <span className="font-bold">{data?.size}</span>
                        <br />
                        Màu sắc: <span className="font-bold">{data?.color}</span>
                    </p>
                </td>
                <td className="mt-5 text-center align-middle font-bold text-red-500">
                    {formatNumber(data?.price)} đ
                </td>
                <td className="mt-5 pl-9 text-center align-middle">
                    {data?.quantity}
                </td>
                <td className="mt-5 text-center align-middle font-bold">
                    {formatNumber(data?.price * data?.quantity)} đ
                </td>
            </tr>
            <hr className="my-1 w-full border-t border-dashed border-white " />
        </>
    )
}

export default ProductInCartCheckOut
