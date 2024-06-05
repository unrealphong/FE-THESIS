import Cart from "@/pages/Cart/Cart"
import HomePage from "@/pages/HomePage/HomePage"
import ListProduct from "@/pages/ListProduct/ListProduct"
import LoginPage from "@/pages/LoginPage/LoginPage"
import RegisterPage from "@/pages/RegisterPage/RegisterPage"
import { pathName } from "@/routes/path-name"

export const UnAuthRouter = [
  {
    path: pathName.LOGIN,
    element: <LoginPage />,
  },
  {
    path: pathName.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: pathName.HOME,
    element: <HomePage />,
  },
  {
    path: pathName.PRODUCTS,
    element: <ListProduct />,
  },
  {
    path: pathName.CART,
    element: <Cart />,

  },
]
