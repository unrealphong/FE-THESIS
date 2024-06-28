import { useState } from "react"

const SizeInProductDetail = ({ data, product, idSize, onSize }: any) => {
    const [click, setclick] = useState(false)
    if (!Array.isArray(product) || product.length === 0) {
        return <div></div>
    }
    let foundValue = undefined
    product.forEach((item) => {
        const foundObj = item.attribute_values[1]
        if (foundObj.value == data?.value) {
            foundValue = foundObj.value
        }
    })

    let sizeValue: any = undefined
    let idattributevalue: any = undefined
    let idvarians: any = undefined
    product.forEach((item) => {
        const foundObj = item.attribute_values[1]
        if (item?.id == idSize) {
            const sizeValue1 = item.attribute_values[1]
            sizeValue = sizeValue1.value
            idvarians = item.id
            idattributevalue = sizeValue1?.id
        }
    })

    const HandleClick = () => {
        setclick(!click)
        onSize(idvarians, idattributevalue, sizeValue)
    }
    return (
        <>
            {idSize ? (
                <button
                    className={`m-1 mx-1 h-7 w-16 rounded-full ${sizeValue == data?.value ? `border border-black  ${click ? "color bg-black text-white" : "text-black"}` : " border border-gray-200 text-gray-200"}`}
                    disabled={sizeValue == data?.value ? false : true}
                    onClick={() => HandleClick()}
                >
                    Size {data?.value}
                </button>
            ) : (
                <button
                    className={`m-1 mx-1 h-7 w-16 rounded-full ${foundValue ? `border border-black ${click ? "color bg-black text-white" : "text-black"}` : " border border-gray-200 text-gray-200"}`}
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
