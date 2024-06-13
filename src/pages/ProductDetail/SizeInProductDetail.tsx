import { useState } from "react"

const SizeInProductDetail = ({ data, product, idSize, onSize }) => {
    const [click, setclick] = useState(false)
    if (!Array.isArray(product) || product.length === 0) {
        return <div>No data available</div>
    }

    let foundValue = undefined
    product.forEach((item) => {
        const foundObj = item.attributes.find((obj) => obj.value === data?.value)
        if (foundObj) {
            foundValue = foundObj.value
        }
    })
    let sizeValue = undefined
    product.forEach((item) => {
        const foundObj = item.attributes.find((obj) => obj.id === idSize)
        if (foundObj) {
            const sizeValue1 = item.attributes[1]
            sizeValue = sizeValue1.value
        }
    })

    const HandleClick = () => {
        setclick(!click)
        onSize(data?.value)
    }
    return (
        <>
            {idSize ? (
                <button
                    className={`m-1 mx-1 h-7 w-16 rounded-full rounded-lg ${sizeValue == data?.value ? `border border-black  ${click ? "color bg-black text-white" : "text-black"}` : " border border-gray-200 text-gray-200"}`}
                    disabled={sizeValue == data?.value ? false : true}
                    onClick={() => HandleClick()}
                >
                    Size {data?.value}
                </button>
            ) : (
                <button
                    className={`m-1 mx-1 h-7 w-16 rounded-full rounded-lg ${foundValue ? `border border-black ${click ? "color bg-black text-white" : "text-black"}` : " border border-gray-200 text-gray-200"}`}
                    disabled={foundValue ? false : true}
                    onClick={() => HandleClick()}
                >
                    Size {data?.value}
                </button>
            )}
        </>
    )
}

export default SizeInProductDetail
