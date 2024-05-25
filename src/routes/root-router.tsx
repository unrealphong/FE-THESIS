import HomePage from "../pages/HomePage"
import Dashboard from "../pages/dashboard"
import { pathName } from "./path-name"
import Products from "./../pages/dashboard/component/product/Products"
import Categories from "../pages/dashboard/component/category/Categories"
import Properties from "../pages/dashboard/component/property/Properties"

export const UnAuthRouter = [
  {
    path: pathName.LOGIN,
    element: <h1>login page</h1>,
  },
  {
    path: pathName.REGISTER,
    element: <h1>resister page</h1>,
  },
  {
    path: pathName.HOME,
    element: <HomePage />,
  },
  {
    path: pathName.DASHBOARD,
    element: <Dashboard />,
    children: [
      {
        path: pathName.PRODUCTS,
        element: <Products />,
      },
      {
        path: pathName.CATEGORIES,
        element: <Categories />,
      },
      {
        path: pathName.PROPERTIES,
        element: <Properties />,
      },
    ],
  },
]
