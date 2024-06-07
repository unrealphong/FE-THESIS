import { MinusOutlined, PlusOutlined } from "@ant-design/icons"
import { Checkbox } from "antd"
import { useState } from "react"
import { Link } from "react-router-dom"

import { Category } from "@/@types/category"
import { MinusOutlined, PlusOutlined } from "@ant-design/icons"
import { Checkbox } from "antd"
import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import CategoryInListProduct from "./CategoryInListProduct"
import { Product } from "@/@types/product"
import ProductInListProduct from "./ProductInListProduct"
const getAllCategory = async () => {
  try {
    const response: AxiosResponse<{ listCategory: Category[] }> = await axios.get(
      "https://app-server.lafutavn.store/api/category/",
    )
    return response.data.listCategory
  } catch (error) {
    console.error("An error occurred while fetching products:", error)
    return []
  }
}
const getAllProduct = async (): Promise<Product[]> => {
  try {
    const response: AxiosResponse<{ products: Product[] }> = await axios.get(
      "https://app-server.lafutavn.store/api/product/",
    )
    return response.data.products
  } catch (error) {
    console.error("An error occurred while fetching products:", error)
    return []
  }
}
const ListProduct = () => {
  const [isDivVisible, setIsDivVisible] = useState(false)
  const [isCategory, setIsCategory] = useState(false)
  const [isSubject, setIsSubject] = useState(false)
  const handleIconClick = () => {
    setIsDivVisible(!isDivVisible)
  }
  const handleIcon1Click = () => {
    setIsCategory(!isCategory)
  }
  const handleIcon2Click = () => {
    setIsSubject(!isSubject)
  }
  const [category, setCategory] = useState<Category[]>([])

  useEffect(() => {
    const fetchCategory = async () => {
      const allCategory: Category[] = await getAllCategory()
      setCategory(allCategory)
    }

    fetchCategory()
  }, [])
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts: Product[] = await getAllProduct()
      setProducts(allProducts)
    }

    fetchProducts()
  }, [])
  const [visibleCount, setVisibleCount] = useState(10)
  const loadMore = () => {
    setVisibleCount((prevCount: number) => prevCount + 10)
  }
  const displayedProducts = products?.slice(0, visibleCount)
  return (
    <>
      <div className="pl-36 pr-28">
        <div className="pb-12 pt-16 text-lg">
          <a href="#">Trang chủ</a> | <a className="font-bold">Danh sách sản phẩm</a>
        </div>
        <div className="flex">
          <div className="" style={{ width: "30%" }}>
            <div className="space-y-3">
              <a href="#!product" className="block w-full text-sm font-bold">
                <span>Sắp xếp theo khoảng giá</span>
              </a>
              <hr className="border-gray-400 border-opacity-50" />
              <a href="#!product" className="flex w-full text-sm font-bold">
              <a href="#!product" className="block w-full text-sm text-sm font-bold">
                <span>Sắp xếp theo khoảng giá</span>
              </a>
              <hr className="border-gray-400 border-opacity-50" />
              <a href="#!product" className="flex w-full text-lg text-sm font-bold">
                <div className="flex-grow">Màu sắc</div>
                <div
                  className="w-1/10 text-center text-xs font-bold"
                  onClick={handleIconClick}
                >
                  {isDivVisible ? <MinusOutlined /> : <PlusOutlined />}
                </div>
              </a>
              {isDivVisible ? (
                <div className="mt-4 grid grid-cols-5 justify-center">
                  <button className="m-1 mx-1 h-8 w-8 rounded-full bg-black"></button>
                  <button className="m-1 mx-1 h-8 w-8 rounded-full bg-red-500 "></button>
                  <button className="m-1 mx-1 h-8 w-8 rounded-full bg-green-400"></button>
                  <button className="m-1 mx-1 h-8 w-8 rounded-full bg-blue-400"></button>
                  <button className="m-1 mx-1 h-8 w-8 rounded-full bg-yellow-400"></button>
                  <button className="m-1 mx-1 h-8 w-8 rounded-full bg-gray-400"></button>
                  <button className="m-1 mx-1 h-8 w-8 rounded-full bg-violet-400"></button>
                </div>
              ) : (
                ""
              )}
              <hr className="border-gray-400 border-opacity-50" />
              <a href="#!product" className="flex text-sm font-bold">
              <a href="#!product" className="flex text-lg text-sm font-bold">
                <div className="flex-grow">Danh mục</div>
                <div
                  className="w-1/10 text-center text-xs font-bold"
                  onClick={handleIcon1Click}
                >
                  {isCategory ? <MinusOutlined /> : <PlusOutlined />}
                </div>
              </a>
              {isCategory ? (
                <div>
                  <div>
                    {" "}
                    <Checkbox>Áo khoác</Checkbox>
                  </div>
                  <div>
                    {" "}
                    <Checkbox>Áo thun</Checkbox>
                  </div>
                  <div>
                    {" "}
                    <Checkbox>Áo nắng</Checkbox>
                  </div>
                  <div>
                    {" "}
                    <Checkbox>Áo polo</Checkbox>
                  </div>
                  {category?.map((data: Category) => {
                    return (
                      <>
                        <CategoryInListProduct data={data} key={data?._id} />
                      </>
                    )
                  })}
                </div>
              ) : (
                ""
              )}
              <hr className="border-gray-400 border-opacity-50" />
              <a href="#!product" className="flex w-full text-sm font-bold ">
              <a href="#!product" className="flex w-full text-lg text-sm font-bold ">
                <div className="flex-grow">Đối tượng</div>
                <div
                  className="w-1/10 text-center text-xs font-bold"
                  onClick={handleIcon2Click}
                >
                  {isSubject ? <MinusOutlined /> : <PlusOutlined />}
                </div>
              </a>
              {isSubject ? (
                <div>
                  <div>
                    {" "}
                    <Checkbox>Nam</Checkbox>
                  </div>
                  <div>
                    {" "}
                    <Checkbox>Nữ</Checkbox>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="px-8">
            <div className="">
              <div className="">
                <h1 className="text-xl font-bold ">Tất cả sản phẩm</h1>
              </div>
            </div>
            <div className="pt-4"></div>
            <hr className=" border-dashed border-gray-300 " />

            <div className="flex pt-4">
              <span className="">Sắp Xếp Theo</span>
              <div className="pl-20">
                <select
                  className="w-30 p rounded border border-gray-500 p-1"
                  name="sort"
                  id="sort"
                  style={{ width: "200px" }}
                  ng-model="selectedSortType"
                  ng-change="applyFiltersAndSort()"
                >
                  <option value="newest" className=" text-sm">
                    Mặc định
                  </option>
                  <option value="nameAsc" className=" text-sm">
                    Tên A - Z
                  </option>
                  <option value="nameDesc" className=" text-sm">
                    Tên Z - A
                  </option>
                  <option value="priceDesc" className=" text-sm">
                    Cao - Thấp
                  </option>
                  <option value="priceAsc" className=" text-sm">
                    Thấp - Cao
                  </option>
                </select>
              </div>
            </div>
            <div className="row row-gap-4 mt-3">
              <div
                className="grid grid-cols-5 gap-4"
                ng-repeat="product in displayedProducts"
              >
                <div className="position-relative custom-card-hover card">
                  <Link to={`/product/1`}>
                    <img
                      src={
                        "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75"
                      }
                      style={{ height: "250px" }}
                    />
                  </Link>
                  <div className=" ">
                    <a
                      className="nav-link fs-7"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Áo chống nắng nữ SunStop Master loại cao
                    </a>
                    <div
                      className=""
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      200.000đ
                    </div>
                    <p className="font-bold text-[#FF0000]">-20%</p>
                  </div>

                  <span className="opacity-50" style={{ fontSize: "12px" }}>
                    Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV
                  </span>
                </div>
                <div className="position-relative custom-card-hover card">
                  <Link to={`/product/1`}>
                    <img
                      src={
                        "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75"
                      }
                      style={{ height: "250px" }}
                    />
                  </Link>
                  <div className=" ">
                    <a
                      className="nav-link fs-7"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Áo chống nắng nữ SunStop Master loại cao
                    </a>
                    <div
                      className=""
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      200.000đ
                    </div>
                    <p className="font-bold text-[#FF0000]">-20%</p>
                  </div>

                  <span className="opacity-50" style={{ fontSize: "12px" }}>
                    Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV
                  </span>
                </div>
                <div className="position-relative custom-card-hover card">
                  <Link to={`/product/1`}>
                    <img
                      src={
                        "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75"
                      }
                      style={{ height: "250px" }}
                    />
                  </Link>
                  <div className=" ">
                    <a
                      className="nav-link fs-7"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Áo chống nắng nữ SunStop Master loại cao
                    </a>
                    <div
                      className=""
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      200.000đ
                    </div>
                    <p className="font-bold text-[#FF0000]">-20%</p>
                  </div>

                  <span className="opacity-50" style={{ fontSize: "12px" }}>
                    Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV
                  </span>
                </div>
                <div className="position-relative custom-card-hover card">
                  <Link to={`/product/1`}>
                    <img
                      src={
                        "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75"
                      }
                      style={{ height: "250px" }}
                    />
                  </Link>
                  <div className=" ">
                    <a
                      className="nav-link fs-7"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Áo chống nắng nữ SunStop Master loại cao
                    </a>
                    <div
                      className=""
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      200.000đ
                    </div>
                    <p className="font-bold text-[#FF0000]">-20%</p>
                  </div>

                  <span className="opacity-50" style={{ fontSize: "12px" }}>
                    Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV
                  </span>
                </div>
                <div className="position-relative custom-card-hover card">
                  <Link to={`/product/1`}>
                    <img
                      src={
                        "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75"
                      }
                      style={{ height: "250px" }}
                    />
                  </Link>
                  <div className=" ">
                    <a
                      className="nav-link fs-7"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Áo chống nắng nữ SunStop Master loại cao
                    </a>
                    <div
                      className=""
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      200.000đ
                    </div>
                    <p className="font-bold text-[#FF0000]">-20%</p>
                  </div>

                  <span className="opacity-50" style={{ fontSize: "12px" }}>
                    Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV
                  </span>
                </div>
                <div className="position-relative custom-card-hover card">
                  <Link to={`/product/1`}>
                    <img
                      src={
                        "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75"
                      }
                      style={{ height: "250px" }}
                    />
                  </Link>
                  <div className=" ">
                    <a
                      className="nav-link fs-7"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Áo chống nắng nữ SunStop Master loại cao
                    </a>
                    <div
                      className=""
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      200.000đ
                    </div>
                    <p className="font-bold text-[#FF0000]">-20%</p>
                  </div>

                  <span className="opacity-50" style={{ fontSize: "12px" }}>
                    Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV
                  </span>
                </div>
                <div className="position-relative custom-card-hover card">
                  <Link to={`/product/1`}>
                    <img
                      src={
                        "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75"
                      }
                      style={{ height: "250px" }}
                    />
                  </Link>
                  <div className=" ">
                    <a
                      className="nav-link fs-7"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Áo chống nắng nữ SunStop Master loại cao
                    </a>
                    <div
                      className=""
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      200.000đ
                    </div>
                    <p className="font-bold text-[#FF0000]">-20%</p>
                  </div>

                  <span className="opacity-50" style={{ fontSize: "12px" }}>
                    Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV
                  </span>
                </div>
                <div className="position-relative custom-card-hover card">
                  <Link to={`/product/1`}>
                    <img
                      src={
                        "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75"
                      }
                      style={{ height: "250px" }}
                    />
                  </Link>
                  <div className=" ">
                    <a
                      className="nav-link fs-7"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Áo chống nắng nữ SunStop Master loại cao
                    </a>
                    <div
                      className=""
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      200.000đ
                    </div>
                    <p className="font-bold text-[#FF0000]">-20%</p>
                  </div>

                  <span className="opacity-50" style={{ fontSize: "12px" }}>
                    Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV
                  </span>
                </div>
                <div className="position-relative custom-card-hover card">
                  <Link to={`/product/1`}>
                    <img
                      src={
                        "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75"
                      }
                      style={{ height: "250px" }}
                    />
                  </Link>
                  <div className=" ">
                    <a
                      className="nav-link fs-7"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Áo chống nắng nữ SunStop Master loại cao
                    </a>
                    <div
                      className=""
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      200.000đ
                    </div>
                    <p className="font-bold text-[#FF0000]">-20%</p>
                  </div>

                  <span className="opacity-50" style={{ fontSize: "12px" }}>
                    Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV
                  </span>
                </div>
                <div className="position-relative custom-card-hover card">
                  <Link to={`/product/1`}>
                    <img
                      src={
                        "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75"
                      }
                      style={{ height: "250px" }}
                    />
                  </Link>
                  <div className=" ">
                    <a
                      className="nav-link fs-7"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Áo chống nắng nữ SunStop Master loại cao
                    </a>
                    <div
                      className=""
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      200.000đ
                    </div>
                    <p className="font-bold text-[#FF0000]">-20%</p>
                  </div>

                  <span className="opacity-50" style={{ fontSize: "12px" }}>
                    Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV
                  </span>
                </div>
                <div className="position-relative custom-card-hover card">
                  <Link to={`/product/1`}>
                    <img
                      src={
                        "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75"
                      }
                      style={{ height: "250px" }}
                    />
                  </Link>
                  <div className=" ">
                    <a
                      className="nav-link fs-7"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Áo chống nắng nữ SunStop Master loại cao
                    </a>
                    <div
                      className=""
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      200.000đ
                    </div>
                    <p className="font-bold text-[#FF0000]">-20%</p>
                  </div>

                  <span className="opacity-50" style={{ fontSize: "12px" }}>
                    Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV
                  </span>
                </div>
                <div className="position-relative custom-card-hover card">
                  <Link to={`/product/1`}>
                    <img
                      src={
                        "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75"
                      }
                      style={{ height: "250px" }}
                    />
                  </Link>
                  <div className=" ">
                    <a
                      className="nav-link fs-7"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Áo chống nắng nữ SunStop Master loại cao
                    </a>
                    <div
                      className=""
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      200.000đ
                    </div>
                    <p className="font-bold text-[#FF0000]">-20%</p>
                  </div>

                  <span className="opacity-50" style={{ fontSize: "12px" }}>
                    Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV
                  </span>
                </div>
              </div>
              <div className="mb-20 mt-10 flex justify-center">
                <button className="rounded border border-red-500 bg-red-500 px-4 py-2 text-white">
                {displayedProducts?.map((data: Product) => {
                  return (
                    <>
                      <ProductInListProduct data={data} key={data?._id} />
                    </>
                  )
                })}
              </div>
              <div className="mb-20 mt-10 flex justify-center">
                <button
                  className="rounded border border-red-500 bg-red-500 px-4 py-2 text-white"
                  onClick={loadMore}
                >
                  Xem thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListProduct
