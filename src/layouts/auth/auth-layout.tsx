import logo from "@/assets/images/logo/logo.webp"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"
import { Breadcrumb, Button, Layout, Menu, theme } from "antd"
import React, { useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
const { Header, Sider, Content } = Layout

const AuthLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  const location = useLocation()
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((item) => item)
    return [
      <Breadcrumb.Item key="home">
        <Link to="/">Admin</Link>
      </Breadcrumb.Item>,
      ...pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
        const displayName = name
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())
        return (
          <Breadcrumb.Item key={routeTo}>
            <Link to={routeTo}>{displayName}</Link>
          </Breadcrumb.Item>
        )
      }),
    ]
  }
  return (
    <Layout>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical m-5">
          <img src={logo} alt="logo" />
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link to="/thong-ke">Thống kê</Link>,
            },
            {
              key: "sub1",
              icon: <VideoCameraOutlined />,
              label: "Quản lý danh mục",
              children: [
                {
                  key: "3",
                  label: <Link to="/quan-ly-danh-muc">Tất cả danh mục</Link>,
                },
                { key: "4", label: "Thêm danh muc" },
                { key: "5", label: "Sửa danh muc" },
              ],
            },
            {
              key: "sub2",
              icon: <UploadOutlined />,
              label: "Quản lý sản phẩm",
              children: [
                {
                  key: "6",
                  label: <Link to="/quan-ly-san-pham">Tất cả sản phẩm</Link>,
                },
                { key: "7", label: "Thêm sản phẩm" },
                { key: "8", label: "Sửa sản phẩm" },
              ],
            },
            {
              key: "9",
              icon: <UserOutlined />,
              label: "Users",
            },
            {
              key: "10",
              icon: <UserOutlined />,
              label: "Orders",
            },
            {
              key: "11",
              icon: <UserOutlined />,
              label: "Settings",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className="mx-4 my-6 p-6"
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            {generateBreadcrumbs()}
          </Breadcrumb>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AuthLayout
