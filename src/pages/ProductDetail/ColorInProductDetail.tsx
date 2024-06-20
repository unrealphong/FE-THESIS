import { CloseOutlined } from "@ant-design/icons"
import { useState } from "react"

const ColorInProductDetail = ({
    data,
    onColor,
    product,
    onSize,
    selectedColor,
}: any) => {
    console.log(product)
    const [click, setclick] = useState(null)
    if (!Array.isArray(product) || product.length === 0) {
        return <div></div>
    }

    let foundValue = undefined
    let idValue: any = undefined
    product?.forEach((item) => {
        const foundObj = item.attribute_names[0]
        console.log(foundObj)

        if (foundObj?.value == data?.value) {
            foundValue = foundObj.value
            idValue = item.id
        }
    })
    const HandleClick = (id: any) => {
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
            {foundValue ? (
                <>
                    <button
                        className={` m-1 mx-1 h-8 w-8 rounded-full   ${selectedColor == idValue ? "border-4 border-gray-200" : "boder border-gray-200"}   `}
                        onClick={() => HandleClick(data?.id)}
                        disabled={foundValue ? false : true}
                        key={data?.id}
                        style={{ backgroundColor: `${data?.value}` }}
                    ></button>
                </>
            ) : (
                ""
            )}
        </>
    )
}

export default ColorInProductDetail
