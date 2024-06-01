import CategoryManagement from "@/pages/Admin/Categories"
import Dashboard from "@/pages/Admin/Dashboard"
import ProductManagement from "@/pages/Admin/Products/ProductList"
import { pathName } from "@/routes/path-name"
export const AuthRouter = [
  {
    path: pathName.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: pathName.Categories,
    element: <CategoryManagement />,
  },
  {
    path: pathName.Products,
    element: <ProductManagement />,
  },
]
