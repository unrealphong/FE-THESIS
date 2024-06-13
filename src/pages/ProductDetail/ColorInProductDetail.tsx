import { CloseOutlined } from "@ant-design/icons"
import { useState } from "react"

const ColorInProductDetail = ({ data, onColor, product, onSize }) => {
    const [click, setclick] = useState(null)
    if (!Array.isArray(product) || product.length === 0) {
        return <div>No data available</div>
    }

    let foundValue = undefined
    let idValue = undefined
    product.forEach((item) => {
        const foundObj = item.attribute_values.find(
            (obj) => obj.value === data?.value,
        )
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
                className={`m-1 mx-1 h-8 w-8 rounded-full bg-${data?.value}-600  ${click == data?.id ? "border-4 border-gray-200" : "boder border-gray-300"} `}
                onClick={() => HandleClick(data?.id)}
                disabled={foundValue ? false : true}
                key={data?.id}
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
