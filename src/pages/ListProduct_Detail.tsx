import { Product } from "../interface/interface"
import formatNumber from "../utils/FormatTotal"
import { Link } from "react-router-dom"

interface ProductDetailProps {
  product: Product
}
const ListProduct_Detail: React.FC<ProductDetailProps> = ({ product }) => {
  const price: number = product?.price
  const sale: number = product?.sale
  const total_sale: number = (price * sale) / 100

  return (
    <>
      <div
        key={product?._id}
        className="col-xl-2 col-md-4 col-6"
        ng-repeat="product in displayedProducts"
      >
        <div className="card position-relative custom-card-hover" key={product?._id}>
          <Link to={`/product/${product?._id}`}>
            <img
              src={product?.images[0]}
              className="img-fluid card-img-top"
              style={{ height: "240px !important", objectFit: "cover" }}
            />
          </Link>
          <div className="card-body p-2">
            <a className="nav-link fs-7" style={{ fontSize: "16px" }}>
              {product?.title.slice(0, 25)}...
            </a>

            <div className="d-flex align-items-center justify-content-start gap-2">
              <p className="text-danger fw-bold mb-0">
                {product?.sale > 0
                  ? formatNumber(product.price - total_sale) + "đ"
                  : formatNumber(product?.price) + " " + "đ"}
              </p>
              <p className="mb-0 fs-8 text-decoration-line-through">
                {product?.sale > 0 ? formatNumber(product?.price) + " " + "đ" : ""}
              </p>
            </div>
          </div>

          <span
            className="badge text-bg-danger position-absolute p-2"
            ng-if="product.sale > 0"
          >
            {product?.sale > 0 ? product?.sale + "%" : ""}
          </span>
        </div>
      </div>
    </>
  )
}

export default ListProduct_Detail
