import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Checkbox } from 'antd';
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ListProduct = () => {
    const [isDivVisible, setIsDivVisible] = useState(false);
    const [isCategory, setIsCategory] = useState(false)
    const [isSubject, setIsSubject] = useState(false)
    const handleIconClick = () => {
        setIsDivVisible(!isDivVisible);
    };
    const handleIcon1Click = () => {
        setIsCategory(!isCategory);
    };
    const handleIcon2Click = () => {
        setIsSubject(!isSubject);
    };
    return (
        <>
            <div className="pl-36 pr-28">
                <div className="text-lg pt-16 pb-12"><a href="#">Trang chủ</a> | <a className="font-bold">Danh sách sản phẩm</a></div>
                <div className="flex">
                    <div className="" style={{ width: "30%" }}>
                        <div className="space-y-3">
                            <a
                                href="#!product"
                                className="block w-full text-sm font-bold text-sm"
                            >
                                <span>Sắp xếp theo khoảng giá</span>
                            </a>
                            <hr className="border-gray-400 border-opacity-50" />
                            <a
                                href="#!product"
                                className="flex w-full text-lg font-bold text-sm"
                            >
                                <div className="flex-grow">Màu sắc</div>
                                <div className="w-1/10 text-center font-bold text-xs" onClick={handleIconClick}>
                                    {isDivVisible ? <MinusOutlined /> : <PlusOutlined />}
                                </div>
                            </a>
                            {isDivVisible ? <div className="grid justify-center mt-4 grid-cols-5">
                                <button
                                    className="w-8 h-8 bg-black rounded-full mx-1 m-1"
                                ></button>
                                <button
                                    className="w-8 h-8 rounded-full mx-1 m-1 bg-red-500 "
                                ></button>
                                <button
                                    className="w-8 h-8 bg-green-400 rounded-full mx-1 m-1"
                                ></button>
                                <button
                                    className="w-8 h-8 bg-blue-400 rounded-full mx-1 m-1"
                                ></button>
                                <button
                                    className="w-8 h-8 bg-yellow-400 rounded-full mx-1 m-1"
                                ></button>
                                <button
                                    className="w-8 h-8 bg-gray-400 rounded-full mx-1 m-1"
                                ></button>
                                <button
                                    className="w-8 h-8 bg-violet-400 rounded-full mx-1 m-1"
                                ></button>
                            </div> : ""}
                            <hr className="border-gray-400 border-opacity-50" />
                            <a
                                href="#!product"
                                className="flex text-lg font-bold text-sm"
                            >
                                <div className="flex-grow">Danh mục</div>
                                <div className="w-1/10 text-center font-bold text-xs" onClick={handleIcon1Click}>
                                    {isCategory ? <MinusOutlined /> : <PlusOutlined />}
                                </div>
                            </a>
                            {isCategory ?
                                <div>
                                    <div> <Checkbox>Áo khoác</Checkbox></div>
                                    <div> <Checkbox>Áo thun</Checkbox></div>
                                    <div> <Checkbox>Áo nắng</Checkbox></div>
                                    <div> <Checkbox>Áo polo</Checkbox></div>
                                </div>
                                : ""}
                            <hr className="border-gray-400 border-opacity-50" />
                            <a
                                href="#!product"
                                className="flex w-full text-lg font-bold text-sm "
                            >
                                <div className="flex-grow">Đối tượng</div>
                                <div className="w-1/10 text-center font-bold text-xs" onClick={handleIcon2Click}>
                                    {isSubject ? <MinusOutlined /> : <PlusOutlined />}
                                </div>
                            </a>
                            {isSubject ?
                                <div>
                                    <div> <Checkbox>Nam</Checkbox></div>
                                    <div> <Checkbox>Nữ</Checkbox></div>
                                </div>
                                : ""}
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
                            <div className='pl-20'>
                                <select
                                    className="border p-1 border-gray-500 rounded w-30 p"
                                    name="sort"
                                    id="sort"
                                    style={{ width: "200px" }}
                                    ng-model="selectedSortType"
                                    ng-change="applyFiltersAndSort()"
                                >
                                    <option value="newest" className=' text-sm'>Mặc định</option>
                                    <option value="nameAsc" className=' text-sm'>Tên A - Z</option>
                                    <option value="nameDesc" className=' text-sm'>Tên Z - A</option>
                                    <option value="priceDesc" className=' text-sm'>Cao - Thấp</option>
                                    <option value="priceAsc" className=' text-sm'>Thấp - Cao</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-3 row-gap-4">
                            <div
                                className="grid grid-cols-5 gap-4"
                                ng-repeat="product in displayedProducts"
                            >
                                <div className="card position-relative custom-card-hover" >
                                    <Link to={`/product/1`}>
                                        <img
                                            src={'https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75'}
                                            style={{ height: '250px' }}
                                        />
                                    </Link>
                                    <div className=" ">
                                        <a className="nav-link fs-7" style={{ fontSize: "14px", fontWeight: '500' }}>
                                            Áo chống nắng nữ SunStop Master loại cao
                                        </a>
                                        <div className="" style={{ fontSize: "16px", fontWeight: 'bold' }}>
                                            200.000đ
                                        </div>
                                        <p
                                            className="text-[#FF0000] font-bold"
                                        >
                                            -20%
                                        </p>
                                    </div>


                                    <span className="opacity-50" style={{ fontSize: '12px' }}>Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV</span>
                                </div>
                                <div className="card position-relative custom-card-hover" >
                                    <Link to={`/product/1`}>
                                        <img
                                            src={'https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75'}
                                            style={{ height: '250px' }}
                                        />
                                    </Link>
                                    <div className=" ">
                                        <a className="nav-link fs-7" style={{ fontSize: "14px", fontWeight: '500' }}>
                                            Áo chống nắng nữ SunStop Master loại cao
                                        </a>
                                        <div className="" style={{ fontSize: "16px", fontWeight: 'bold' }}>
                                            200.000đ
                                        </div>
                                        <p
                                            className="text-[#FF0000] font-bold"
                                        >
                                            -20%
                                        </p>
                                    </div>


                                    <span className="opacity-50" style={{ fontSize: '12px' }}>Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV</span>
                                </div>
                                <div className="card position-relative custom-card-hover" >
                                    <Link to={`/product/1`}>
                                        <img
                                            src={'https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75'}
                                            style={{ height: '250px' }}
                                        />
                                    </Link>
                                    <div className=" ">
                                        <a className="nav-link fs-7" style={{ fontSize: "14px", fontWeight: '500' }}>
                                            Áo chống nắng nữ SunStop Master loại cao
                                        </a>
                                        <div className="" style={{ fontSize: "16px", fontWeight: 'bold' }}>
                                            200.000đ
                                        </div>
                                        <p
                                            className="text-[#FF0000] font-bold"
                                        >
                                            -20%
                                        </p>
                                    </div>


                                    <span className="opacity-50" style={{ fontSize: '12px' }}>Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV</span>
                                </div>
                                <div className="card position-relative custom-card-hover" >
                                    <Link to={`/product/1`}>
                                        <img
                                            src={'https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75'}
                                            style={{ height: '250px' }}
                                        />
                                    </Link>
                                    <div className=" ">
                                        <a className="nav-link fs-7" style={{ fontSize: "14px", fontWeight: '500' }}>
                                            Áo chống nắng nữ SunStop Master loại cao
                                        </a>
                                        <div className="" style={{ fontSize: "16px", fontWeight: 'bold' }}>
                                            200.000đ
                                        </div>
                                        <p
                                            className="text-[#FF0000] font-bold"
                                        >
                                            -20%
                                        </p>
                                    </div>


                                    <span className="opacity-50" style={{ fontSize: '12px' }}>Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV</span>
                                </div>
                                <div className="card position-relative custom-card-hover" >
                                    <Link to={`/product/1`}>
                                        <img
                                            src={'https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75'}
                                            style={{ height: '250px' }}
                                        />
                                    </Link>
                                    <div className=" ">
                                        <a className="nav-link fs-7" style={{ fontSize: "14px", fontWeight: '500' }}>
                                            Áo chống nắng nữ SunStop Master loại cao
                                        </a>
                                        <div className="" style={{ fontSize: "16px", fontWeight: 'bold' }}>
                                            200.000đ
                                        </div>
                                        <p
                                            className="text-[#FF0000] font-bold"
                                        >
                                            -20%
                                        </p>
                                    </div>


                                    <span className="opacity-50" style={{ fontSize: '12px' }}>Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV</span>
                                </div>
                                <div className="card position-relative custom-card-hover" >
                                    <Link to={`/product/1`}>
                                        <img
                                            src={'https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75'}
                                            style={{ height: '250px' }}
                                        />
                                    </Link>
                                    <div className=" ">
                                        <a className="nav-link fs-7" style={{ fontSize: "14px", fontWeight: '500' }}>
                                            Áo chống nắng nữ SunStop Master loại cao
                                        </a>
                                        <div className="" style={{ fontSize: "16px", fontWeight: 'bold' }}>
                                            200.000đ
                                        </div>
                                        <p
                                            className="text-[#FF0000] font-bold"
                                        >
                                            -20%
                                        </p>
                                    </div>


                                    <span className="opacity-50" style={{ fontSize: '12px' }}>Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV</span>
                                </div>
                                <div className="card position-relative custom-card-hover" >
                                    <Link to={`/product/1`}>
                                        <img
                                            src={'https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75'}
                                            style={{ height: '250px' }}
                                        />
                                    </Link>
                                    <div className=" ">
                                        <a className="nav-link fs-7" style={{ fontSize: "14px", fontWeight: '500' }}>
                                            Áo chống nắng nữ SunStop Master loại cao
                                        </a>
                                        <div className="" style={{ fontSize: "16px", fontWeight: 'bold' }}>
                                            200.000đ
                                        </div>
                                        <p
                                            className="text-[#FF0000] font-bold"
                                        >
                                            -20%
                                        </p>
                                    </div>


                                    <span className="opacity-50" style={{ fontSize: '12px' }}>Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV</span>
                                </div>
                                <div className="card position-relative custom-card-hover" >
                                    <Link to={`/product/1`}>
                                        <img
                                            src={'https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75'}
                                            style={{ height: '250px' }}
                                        />
                                    </Link>
                                    <div className=" ">
                                        <a className="nav-link fs-7" style={{ fontSize: "14px", fontWeight: '500' }}>
                                            Áo chống nắng nữ SunStop Master loại cao
                                        </a>
                                        <div className="" style={{ fontSize: "16px", fontWeight: 'bold' }}>
                                            200.000đ
                                        </div>
                                        <p
                                            className="text-[#FF0000] font-bold"
                                        >
                                            -20%
                                        </p>
                                    </div>


                                    <span className="opacity-50" style={{ fontSize: '12px' }}>Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV</span>
                                </div>
                                <div className="card position-relative custom-card-hover" >
                                    <Link to={`/product/1`}>
                                        <img
                                            src={'https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75'}
                                            style={{ height: '250px' }}
                                        />
                                    </Link>
                                    <div className=" ">
                                        <a className="nav-link fs-7" style={{ fontSize: "14px", fontWeight: '500' }}>
                                            Áo chống nắng nữ SunStop Master loại cao
                                        </a>
                                        <div className="" style={{ fontSize: "16px", fontWeight: 'bold' }}>
                                            200.000đ
                                        </div>
                                        <p
                                            className="text-[#FF0000] font-bold"
                                        >
                                            -20%
                                        </p>
                                    </div>


                                    <span className="opacity-50" style={{ fontSize: '12px' }}>Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV</span>
                                </div>
                                <div className="card position-relative custom-card-hover" >
                                    <Link to={`/product/1`}>
                                        <img
                                            src={'https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75'}
                                            style={{ height: '250px' }}
                                        />
                                    </Link>
                                    <div className=" ">
                                        <a className="nav-link fs-7" style={{ fontSize: "14px", fontWeight: '500' }}>
                                            Áo chống nắng nữ SunStop Master loại cao
                                        </a>
                                        <div className="" style={{ fontSize: "16px", fontWeight: 'bold' }}>
                                            200.000đ
                                        </div>
                                        <p
                                            className="text-[#FF0000] font-bold"
                                        >
                                            -20%
                                        </p>
                                    </div>


                                    <span className="opacity-50" style={{ fontSize: '12px' }}>Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV</span>
                                </div>
                                <div className="card position-relative custom-card-hover" >
                                    <Link to={`/product/1`}>
                                        <img
                                            src={'https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75'}
                                            style={{ height: '250px' }}
                                        />
                                    </Link>
                                    <div className=" ">
                                        <a className="nav-link fs-7" style={{ fontSize: "14px", fontWeight: '500' }}>
                                            Áo chống nắng nữ SunStop Master loại cao
                                        </a>
                                        <div className="" style={{ fontSize: "16px", fontWeight: 'bold' }}>
                                            200.000đ
                                        </div>
                                        <p
                                            className="text-[#FF0000] font-bold"
                                        >
                                            -20%
                                        </p>
                                    </div>


                                    <span className="opacity-50" style={{ fontSize: '12px' }}>Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV</span>
                                </div>
                                <div className="card position-relative custom-card-hover" >
                                    <Link to={`/product/1`}>
                                        <img
                                            src={'https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17162865823595937_512.jpg&w=1920&q=75'}
                                            style={{ height: '250px' }}
                                        />
                                    </Link>
                                    <div className=" ">
                                        <a className="nav-link fs-7" style={{ fontSize: "14px", fontWeight: '500' }}>
                                            Áo chống nắng nữ SunStop Master loại cao
                                        </a>
                                        <div className="" style={{ fontSize: "16px", fontWeight: 'bold' }}>
                                            200.000đ
                                        </div>
                                        <p
                                            className="text-[#FF0000] font-bold"
                                        >
                                            -20%
                                        </p>
                                    </div>


                                    <span className="opacity-50" style={{ fontSize: '12px' }}>Cao cấp nhất, chống nắng, chống nóng #1, chống tia UV</span>
                                </div>
                            </div>
                            <div className="flex justify-center mt-10 mb-20">
                                <button className="border border-red-500 bg-red-500 text-white px-4 py-2 rounded">
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