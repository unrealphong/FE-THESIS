import HomePage from "@/pages/HomePage"
import LoginPage from "@/pages/LoginPage/LoginPage"
import RegisterPage from "@/pages/RegisterPage/RegisterPage"
import { pathName } from "@/routes/path-name"
import Cart from "../Components/Cart/Cart"

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
    path: pathName.CART,
    element: <Cart />,
  },
]
