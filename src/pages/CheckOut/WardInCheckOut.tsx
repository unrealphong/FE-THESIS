import { getAllWard } from "@/api/services/map"
import { Select } from "antd"
import { Option } from "antd/es/mentions"
import { useEffect, useState } from "react"

const WardInCheckOut = ({ id }) => {
    const [ward, setward] = useState([])
    useEffect(() => {
        const fetchWard = async () => {
            const allward = await getAllWard(id)
            setward(allward)
        }
        fetchWard()
    }, [id])
    return (
        <>
            <div className="w-2/6">
                <label htmlFor="name" className="pl-1 text-sm font-bold">
                    Chọn phường / xã
                    <span className="text-red-500">*</span>
                </label>
                <Select
                    defaultValue="Chọn Xã"
                    style={{ height: "42px" }}
                    className=" mt-3 w-5/6"
                >
                    <Option value="">Chọn Xã</Option>
                    {ward?.map((data) => {
                        return (
                            <>
                                <Option
                                    value={`${data?.ward_name}:${data?.ward_id}`}
                                >
                                    {data?.ward_name}
                                </Option>
                            </>
                        )
                    })}
                </Select>
            </div>
        </>
    )
}

export default WardInCheckOut
