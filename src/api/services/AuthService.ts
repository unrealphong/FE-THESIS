import { LoginResponseType } from "@/@types/auth"
import { toast } from "react-toastify"
import httpRequest from "../axios-instance"
import { ApiConstants } from "../endpoints"

const Login = async <T>(dataForm: T) => {
  try {
    const { data } = await httpRequest.post<LoginResponseType>(
      ApiConstants.LOGIN,
      dataForm,
    )
    toast.dismiss()
    toast.success("Đăng nhập thành công")
    return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.message) {
      toast.error(error.message)
    } else if (error) {
      toast.error("Lỗi server")
    }
    return error
  }
}

const Register = async <T>(dataForm: T) => {
  console.log(dataForm)
}

export const AuthService = {
  Login,
  Register,
}
