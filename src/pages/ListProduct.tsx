import { useGetProductsQuery } from "../services/product"
import { useState } from "react"
import ListProduct_Detail from "./ListProduct_Detail"
import ListProduct_Loading from "./ListProduct_Loading"
import { useGetCategoriesQuery } from "../services/categories"
import ListCategory_Product from "./ListCategory_Product"
import { Category, Product } from "../interface/interface"

const ListProduct = () => {
  const { data: listproduct, isLoading: productLoading } = useGetProductsQuery(0)
  const [visibleCount, setVisibleCount] = useState(12)
  const loadMore = () => {
    setVisibleCount((prevCount: number) => prevCount + 12)
  }
  const displayedProducts = listproduct?.products?.slice(0, visibleCount)
  const { data: category } = useGetCategoriesQuery(0)
  return (
    <>
      <main className="body">
        <div className="container mt-5">
          <div className="row p-0">
            <div className="col-xl-2 col-md-6 col-sm-12">
              <div className="">
                <a
                  href="#!product"
                  className="nav-link w-100 fs-6 fw-medium custom-pd mb-3"
                >
                  Tất Cả Sản Phẩm
                </a>
                {category?.listCategory?.map((categories: Category) => {
                  return (
                    <>
                      <ListCategory_Product
                        categories={categories}
                        key={categories?._id}
                      />
                    </>
                  )
                })}
              </div>
            </div>
            <div className="col-xl-10 col-sm-12">
              <div className="custom-dash pb-3">
                <div className="d-flex align-items-center justify-content-between ng-binding">
                  <h1 className="fs-4 fw-bold ng-binding">Tất cả sản phẩm</h1>
                </div>
              </div>
              <div className="d-flex align-items-center gap-5 justify-content-start my-4">
                <span className="d-block">Sắp Xếp Theo</span>
                <select
                  name="sort"
                  id="sort"
                  className="form-select"
                  style={{ width: "300px" }}
                  ng-model="selectedSortType"
                  ng-change="applyFiltersAndSort()"
                >
                  <option value="newest">Sản Phẩm Mới Nhất</option>
                  <option value="nameAsc">Tên A - Z</option>
                  <option value="nameDesc">Tên Z - A</option>
                  <option value="priceDesc">Giá Cao - Thấp</option>
                  <option value="priceAsc">Giá Thấp - Cao</option>
                </select>
              </div>
              <div className="row mt-3 row-gap-4">
                {displayedProducts?.map((product: Product) => {
                  return <ListProduct_Detail product={product} key={product?._id} />
                })}
                {visibleCount < listproduct?.products?.length && (
                  <div className="text-center mt-5">
                    <button onClick={loadMore} className="btn btn-danger">
                      Xem thêm
                      <i className="fas fa-chevron-down"></i>
                    </button>
                  </div>
                )}
              </div>
              {productLoading ? <ListProduct_Loading /> : ""}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ListProduct
