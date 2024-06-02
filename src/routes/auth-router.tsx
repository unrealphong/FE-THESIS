import CategoryManagement from "@/pages/Admin/Categories"
import Dashboard from "@/pages/Admin/Dashboard"
import AddProduct from "@/pages/Admin/Products/_Features/AddProduct"
import ProductManagement from "@/pages/Admin/Products/ProductList"
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
    path: pathName.PRODUCTS,
    element: <ProductManagement />,
  },
  {
    path: pathName.ADDPRODUCT,
    element: <AddProduct />,
  },
]
