import AttributeManagement from "@/pages/Admin/Attributes"
import CategoryManagement from "@/pages/Admin/Categories"
import Dashboard from "@/pages/Admin/Dashboard"
import OrderManagement from "@/pages/Admin/Orders"
import AddProduct from "@/pages/Admin/Products/_Features/AddProduct"
import UpdateProduct from "@/pages/Admin/Products/_Features/UpdateProduct"
import ProductManagement from "@/pages/Admin/Products/ProductList"
import UserManagement from "@/pages/Admin/Users"
import { pathName } from "@/routes/path-name"
export const AuthRouter = [
    {
        path: pathName.DASHBOARD,
        element: <Dashboard />,
    },
    {
        path: pathName.CATEGORIES,
        element: <CategoryManagement />,
    },
    {
        path: pathName.PRODUCT_MANAGEMENT,
        element: <ProductManagement />,
    },
    // {
    //   path: pathName.VARIANT_MANAGEMENT,
    //   element: <VariantManagement />,
    // },
    {
        path: pathName.UPDATE_PRODUCT,
        element: <UpdateProduct />,
    },
    {
        path: pathName.ADD_PRODUCT,
        element: <AddProduct />,
    },
    {
        path: pathName.USER_MANAGEMENT,
        element: <UserManagement />,
    },
    {
        path: pathName.ORDER_MANAGEMENT,
        element: <OrderManagement />,
    },
    {
        path: pathName.ATTR_MANAGEMENT,
        element: <AttributeManagement />,
    },
]
