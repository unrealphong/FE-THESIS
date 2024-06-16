import { CloseOutlined } from "@ant-design/icons"
import { useState } from "react"

const ColorInProductDetail = ({ data, onColor, product, onSize, selectedColor }) => {
    const [click, setclick] = useState(null)
    if (!Array.isArray(product) || product.length === 0) {
        return <div></div>
    }

    let foundValue = undefined
    let idValue = undefined
    product?.forEach((item) => {
        const foundObj = item.attributes.find((obj) => obj.value === data?.value)
        if (foundObj) {
            foundValue = foundObj.value
            idValue = foundObj.id
        }
    })
    const HandleClick = (id) => {
        if (click == data?.id) {
            setclick(null)
        } else {
            setclick(id)
        }
        onColor(data?.value)
        onSize(idValue)
    }
    return (
        <>
            <button
                className={`m-1 mx-1 h-8 w-8 rounded-full  ${selectedColor == idValue ? "border-4 border-gray-200" : ""} boder border-gray-300 `}
                onClick={() => HandleClick(data?.id)}
                disabled={foundValue ? false : true}
                key={data?.id}
                style={{ backgroundColor: `${data?.value}` }}
            >
                {foundValue ? (
                    ""
                ) : (
                    <>
                        <CloseOutlined className="text-red-500" />
                    </>
                )}
            </button>
        </>
    )
}

export default ColorInProductDetail
