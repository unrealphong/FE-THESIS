import HomePage from "../pages/HomePage"
import { pathName } from "./path-name"
import ListProduct from "../pages/ListProduct"
import Cart from "../pages/Cart"

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
    path: pathName.LIST_PRODUCT,
    element: <ListProduct />,
  },
  {
    path: pathName.CART,
    element: <Cart />,
  },
]
