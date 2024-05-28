import React, { useState } from "react"

const ProductDetail = () => {
  const product = {
    title: "Sample Product",
    category: {
      title: "Category Name",
    },
    images: [
      "https://via.placeholder.com/200",
      "https://via.placeholder.com/200",
      "https://via.placeholder.com/200",
    ],
    price: 1000000,
    sale: 20,
    totalRating: 4,
    variants: [
      { _id: "1", color: "Red", size: "M", quantity: 10 },
      { _id: "2", color: "Blue", size: "L", quantity: 5 },
    ],
    description: "This is a sample product description.",
    rating: [
      { postedBy: { name: "User 1" }, star: 5, comment: "Great product!" },
      { postedBy: { name: "User 2" }, star: 4, comment: "Good quality." },
    ],
  }

  const relatedProducts = [
    {
      _id: "1",
      title: "Related Product 1",
      images: ["https://via.placeholder.com/200"],
      price: 500000,
      sale: 10,
    },
    {
      _id: "2",
      title: "Related Product 2",
      images: ["https://via.placeholder.com/200"],
      price: 750000,
      sale: 15,
    },
  ]

  const isLogin = true

  const [selectedVariant, setSelectedVariant] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [rating, setRating] = useState(0)
  const [content, setContent] = useState("")

  const changeQuantity = (action) => {
    setQuantity((prevQuantity) =>
      action === "increase" ? prevQuantity + 1 : Math.max(1, prevQuantity - 1),
    )
  }

  const getProductQuantity = (variantId) => {
    const variant = product.variants.find((v) => v._id === variantId)
    return variant ? variant.quantity : 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // handle review submission
  }

  const addToWishlist = () => {
    // handle add to wishlist
  }

  const addToCart = () => {
    // handle add to cart
  }

  return (
    <main className="body">
      <div className="container mx-auto mt-5">
        <nav className="text-gray-500 mb-5" aria-label="breadcrumb">
          <ol className="breadcrumb flex">
            <li className="breadcrumb-item">
              <a href="#" className="text-decoration-none text-gray-600">
                Trang Chủ
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="text-decoration-none text-gray-600">
                {product.category.title}
              </a>
            </li>
            <li
              className="breadcrumb-item active text-red-500 font-medium"
              aria-current="page"
            >
              {product.title}
            </li>
          </ol>
        </nav>

        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:w-1/2">
            <div className="flex">
              <div className="flex flex-col gap-3 mr-3">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="w-24 h-24 object-cover cursor-pointer"
                  />
                ))}
              </div>
              <div className="img-larger">
                <img
                  src={product.images[0]}
                  className="w-full h-full object-cover"
                  id="img-larger"
                />
              </div>
            </div>
          </div>

          <div className="xl:w-1/2 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h4 className="text-start font-bold mb-0">{product.title}</h4>
              <div className="flex text-yellow-400">
                {product.totalRating === 0 ? (
                  <span>Chưa có đánh giá</span>
                ) : (
                  [...Array(product.totalRating)].map((_, index) => (
                    <i key={index} className="fa-solid fa-star"></i>
                  ))
                )}
              </div>
            </div>

            <div className="flex justify-between items-center pb-3 border-b">
              <div className="flex items-center justify-start gap-3">
                <p className="mb-0 font-bold text-xl text-red-500">
                  {product.sale > 0
                    ? `${(product.price - (product.price * product.sale) / 100).toLocaleString("vi-VN")}đ`
                    : `${product.price.toLocaleString("vi-VN")}đ`}
                </p>
                {product.sale > 0 && (
                  <p className="mb-0 font-light line-through">
                    {`${product.price.toLocaleString("vi-VN")}đ`}
                  </p>
                )}
                {product.sale > 0 && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded">
                    {product.sale}%
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Còn Hàng</span>
                <img src="./src/assets/img/icon/icon-check.svg" alt="" />
              </div>
            </div>

            <div>
              <label htmlFor="selectedVariant" className="form-label">
                Chọn loại sản phẩm
              </label>
              <select
                className="form-select w-1/4"
                id="selectedVariant"
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(e.target.value)}
              >
                {product.variants.map((variant) => (
                  <option key={variant._id} value={variant._id}>
                    {`${variant.color} - ${variant.size}`}
                  </option>
                ))}
              </select>
              {selectedVariant && (
                <p className="mt-3">
                  Số lượng: {getProductQuantity(selectedVariant)}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-base font-bold">Số Lượng</span>
              <div className="flex items-center gap-2">
                <button
                  className="bg-gray-300 px-3 py-1"
                  onClick={() => changeQuantity("decrease")}
                >
                  -
                </button>
                <input
                  type="number"
                  className="w-12 text-center border border-gray-300 rounded"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
                <button
                  className="bg-gray-300 px-3 py-1"
                  onClick={() => changeQuantity("increase")}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#sizeGuideModal"
                className="flex items-center gap-2 text-red-500"
              >
                <img src="./src/assets/img/icon/icon-lc.svg" alt="" />
                Hướng Dẫn Chọn Kích Thước
              </button>

              <div
                className="modal fade"
                id="sizeGuideModal"
                tabIndex="-1"
                aria-labelledby="sizeGuideModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <img
                        src="./src/assets/img/product/size_guide.webp"
                        className="w-full"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <button
                className={`btn btn-outline-red-500 w-full py-2 ${!isLogin && "disabled"}`}
                onClick={() => addToWishlist(product._id)}
              >
                <i className="fa-solid fa-heart"></i> Yêu Thích
              </button>
              <button
                className="btn btn-red-500 w-full py-2"
                onClick={() => addToCart(product)}
              >
                <img src="./src/assets/img/icon/icon-cart-plus.svg" alt="" /> Thêm
                Vào Giỏ Hàng
              </button>
            </div>

            <button className="btn btn-outline-dark w-full py-2 mt-4">
              <i className="fa-solid fa-location"></i> Tìm Cửa Hàng Có Sản Phẩm
            </button>

            <div className="flex justify-between items-center text-center pt-3 border-t mt-4">
              <div className="flex flex-col items-center">
                <img
                  src="./src/assets/img/icon/icon-delivery.svg"
                  className="w-12 h-12"
                  alt=""
                />
                <span className="font-bold">Miễn Phí Giao Hàng</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="./src/assets/img/icon/icon-payment.svg"
                  className="w-12 h-12"
                  alt=""
                />
                <span className="font-bold">Thanh Toán Nhanh</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="./src/assets/img/icon/icon-returns.svg"
                  className="w-12 h-12"
                  alt=""
                />
                <span className="font-bold">Đổi Trả Dễ Dàng</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Chi Tiết Sản Phẩm
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{product.description}</div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Đánh Giá Từ Khách Hàng
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {product.totalRating === 0 ? (
                    <div className="py-3 flex flex-col items-center gap-3">
                      <img
                        src="./src/assets/img/icon/EmtyReview.86be870e.svg"
                        className="w-24 h-24"
                        alt=""
                      />
                      <p className="mb-0 font-medium text-base">
                        Sản Phẩm Này Chưa Có Đánh Giá
                      </p>
                    </div>
                  ) : (
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Người Đánh Giá</th>
                          <th scope="col">Đánh Giá</th>
                          <th scope="col">Bình Luận</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.rating.map((review, index) => (
                          <tr key={index}>
                            <td>{review.postedBy.name}</td>
                            <td>
                              <div className="text-yellow-400">
                                {[...Array(review.star)].map((_, i) => (
                                  <i key={i} className="fa-solid fa-star"></i>
                                ))}
                              </div>
                            </td>
                            <td>{review.comment}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}

                  {isLogin ? (
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-2 border p-5"
                    >
                      <div className="flex mb-3">
                        <div className="rating">
                          {[5, 4, 3, 2, 1].map((star) => (
                            <React.Fragment key={star}>
                              <input
                                type="radio"
                                id={`star${star}`}
                                name="rating"
                                value={star}
                                checked={rating === star}
                                onChange={() => setRating(star)}
                                className="hidden"
                              />
                              <label
                                htmlFor={`star${star}`}
                                title={`${star} sao`}
                                className="fa-solid fa-star text-3xl text-yellow-400 cursor-pointer"
                              ></label>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Đánh Giá
                        </label>
                        <textarea
                          className="form-control border border-gray-300 rounded"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                      </div>

                      <button type="submit" className="btn btn-red-500">
                        Gửi Đánh Giá
                      </button>
                    </form>
                  ) : (
                    <div className="text-center">
                      <a href="#!login" className="btn btn-red-500 px-5">
                        Bạn Cần Đăng Nhập
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="text-center">
            <h3 className="text-xl mb-3">Sản Phẩm Liên Quan</h3>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-6 gap-4">
            {relatedProducts.map((relatedProduct, index) => (
              <div
                key={index}
                className="card relative shadow-lg hover:shadow-2xl transition-shadow"
              >
                <a href={`#!detail/${relatedProduct._id}`} className="block p-2">
                  <img
                    src={relatedProduct.images[0]}
                    className="w-full h-48 object-cover"
                    alt=""
                  />
                </a>
                <div className="p-2">
                  <a
                    className="block text-sm mb-2"
                    href={`#/detail/${relatedProduct._id}`}
                  >
                    {relatedProduct.title}
                  </a>

                  <div className="flex items-center gap-2">
                    <p className="text-red-500 font-bold mb-0">
                      {relatedProduct.sale > 0
                        ? `${(relatedProduct.price - (relatedProduct.price * relatedProduct.sale) / 100).toLocaleString("vi-VN")}đ`
                        : `${relatedProduct.price.toLocaleString("vi-VN")}đ`}
                    </p>
                    {relatedProduct.sale > 0 && (
                      <p className="text-xs line-through mb-0">
                        {`${relatedProduct.price.toLocaleString("vi-VN")}đ`}
                      </p>
                    )}
                  </div>
                </div>

                {relatedProduct.sale > 0 && (
                  <span className="badge bg-red-500 absolute top-0 right-0 p-2">
                    {relatedProduct.sale}%
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetail
