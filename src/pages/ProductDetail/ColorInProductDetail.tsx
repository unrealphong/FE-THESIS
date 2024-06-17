import { CloseOutlined } from "@ant-design/icons"
import { useState } from "react"

const ColorInProductDetail = ({ data, onColor, product, onSize, selectedColor }) => {
    console.log(product)

    const [click, setclick] = useState(null)
    if (!Array.isArray(product) || product.length === 0) {
        return <div></div>
    }

    let foundValue = undefined
    let idValue = undefined
    product?.forEach((item) => {
        const foundObj = item.attributes[0].pivot
        console.log(foundObj)

        if (foundObj?.name == data?.value) {
            foundValue = foundObj.name
            idValue = foundObj.variant_id
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
    console.log(foundValue)

    return (
        <>
            <button
                className={`m-1 mx-1 h-8 w-8 rounded-full  ${selectedColor == idValue ? "border-4 border-gray-100" : ""}  boder border-gray-600 `}
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
