import { Product } from '@/@types/product'
import { Link } from 'react-router-dom'
import formatNumber from '../../utilities/local-storage/FormatTotal';
type Props = {
    data: Product
}
const ProductInListProduct = ({ data }: Props) => {
    return (
        <>
            <div className="position-relative custom-card-hover card">
                <Link to={`/product/1`}>
                    <img
                        src={data?.images[0]}
                        style={{ height: "250px" }}
                    />
                </Link>
                <div className=" ">
                    <a
                        className="nav-link fs-7"
                        style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                        {data?.title}
                    </a>
                    <div
                        className=""
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                        {data?.sale > 0 ? <>
                            <span className='line-through opacity-50 font-normal text-sm'>{formatNumber(data?.price)}đ</span> 
                            <p >{formatNumber((data?.price) - ((data?.price * data?.sale) / 100))}đ <span className='bg-red-500 text-white px-1 py-1 rounded font-normal text-sm ml-2'>-{data?.sale}%</span></p>
                        </> : <>{formatNumber(data?.price)}đ</>}
                    </div>
                </div>

                <span className="opacity-50 mt-2" style={{ fontSize: "12px" }}>
                    {data?.description}
                </span>
            </div>
        </>
    )
}

export default ProductInListProduct