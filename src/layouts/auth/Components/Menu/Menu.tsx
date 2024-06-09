import {
  OrderedListOutlined,
  SettingOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"
import { Menu } from "antd"
import { Link } from "react-router-dom"

const items = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: <Link to="/thong-ke">Thống kê</Link>,
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: <Link to="/quan-ly-danh-muc">Tất cả danh mục</Link>,
  },
  {
    key: "sub2",
    icon: <UploadOutlined />,
    label: "Quản lý sản phẩm",
    children: [
      {
        key: "3",
        label: <Link to="/quan-ly-san-pham">Tất cả sản phẩm</Link>,
      },
      {
        key: "4",
        label: <Link to="/quan-ly-san-pham/bien-the">Sản phẩm biến thể</Link>,
      },
      {
        key: "5",
        label: <Link to="/quan-ly-san-pham/them">Thêm sản phẩm</Link>,
      },
      { key: "6", label: <Link to="/quan-ly-san-pham/sua">Sửa sản phẩm</Link> },
    ],
  },
  {
    key: "7",
    icon: <TeamOutlined />,
    label: <Link to="/quan-ly-attr">Quản lý thuộc tính</Link>,
  },
  {
    key: "8",
    icon: <TeamOutlined />,
    label: <Link to="/quan-ly-nguoi-dung">Users</Link>,
  },
  {
    key: "9",
    icon: <OrderedListOutlined />,
    label: <Link to="/quan-ly-orders">Orders</Link>,
  },
  {
    key: "10",
    icon: <SettingOutlined />,
    label: "Settings",
  },
]
function MenuSidebar() {
  return <Menu mode="inline" defaultSelectedKeys={["1"]} items={items} />
}

export default MenuSidebar
