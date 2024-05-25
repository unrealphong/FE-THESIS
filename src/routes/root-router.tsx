import UnAuthLayout from "@/layouts/un-auth/un-auth-layout"
import { UnAuthRouter } from "@/routes/un-auth-router"

export const RootUnAuthRouter = [
  {
    path: "/",
    element: <UnAuthLayout />,
    children: [...UnAuthRouter],
  },
]
