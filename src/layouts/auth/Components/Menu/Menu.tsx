import {
    AppstoreOutlined,
    BarChartOutlined,
    OrderedListOutlined,
    SettingOutlined,
    ShoppingCartOutlined,
    TagsOutlined,
    TeamOutlined,
} from "@ant-design/icons"
import { Menu } from "antd"
import { Link } from "react-router-dom"

const items = [
    {
        key: "1",
        icon: <BarChartOutlined />,
        label: <Link to="/thong-ke">Thống kê</Link>,
    },
    {
        key: "2",
        icon: <AppstoreOutlined />,
        label: <Link to="/quan-ly-danh-muc">Tất cả danh mục</Link>,
    },
    {
        key: "sub2",
        icon: <ShoppingCartOutlined />,
        label: "Quản lý sản phẩm",
        children: [
            {
                key: "3",
                label: <Link to="/quan-ly-san-pham">Tất cả sản phẩm</Link>,
            },
            {
                key: "4",
                label: <Link to="/quan-ly-san-pham/them">Thêm sản phẩm</Link>,
            },
        ],
    },
    {
        key: "5",
        icon: <TagsOutlined />,
        label: <Link to="/quan-ly-attr">Quản lý thuộc tính</Link>,
    },
    {
        key: "6",
        icon: <TeamOutlined />,
        label: <Link to="/quan-ly-nguoi-dung">Quản lý người dùng</Link>,
    },
    {
        key: "7",
        icon: <OrderedListOutlined />,
        label: <Link to="/quan-ly-orders">Quản lý đơn hàng</Link>,
    },
    {
        key: "8",
        icon: <SettingOutlined />,
        label: "Cài đặt",
    },
]

function MenuSidebar() {
    return <Menu mode="inline" defaultSelectedKeys={["1"]} items={items} />
}

export default MenuSidebar
