import { Product } from "@/@types/product"
import { Link } from "react-router-dom"
import formatNumber from "../../utilities/FormatTotal"
type Props = {
  data: Product
}
const ProductInListProduct = ({ data }: Props) => {
  return (
    <>
      <div className="position-relative custom-card-hover card">
        <Link to={`/product/1`}>
          <img src={data?.images[0]} style={{ height: "250px" }} />
        </Link>
        <div className=" ">
          <a
            className="nav-link fs-7"
            style={{ fontSize: "14px", fontWeight: "500" }}
          >
            {data?.title}
          </a>
          <div className="" style={{ fontSize: "16px", fontWeight: "bold" }}>
            {data?.sale > 0 ? (
              <>
                <span className="text-sm font-normal line-through opacity-50">
                  {formatNumber(data?.price)}đ
                </span>
                <p>
                  {formatNumber(data?.price - (data?.price * data?.sale) / 100)}đ{" "}
                  <span className="ml-2 rounded bg-red-500 px-1 py-1 text-sm font-normal text-white">
                    -{data?.sale}%
                  </span>
                </p>
              </>
            ) : (
              <>{formatNumber(data?.price)}đ</>
            )}
          </div>
        </div>

        <span className="mt-2 opacity-50" style={{ fontSize: "12px" }}>
          {data?.description}
        </span>
      </div>
    </>
  )
}

export default ProductInListProduct
