import httpRequest from "@/api/axios-instance"
import iconFb from "@/assets/images/icons/icon-fb.svg"
import iconGg from "@/assets/images/icons/icon-gg.svg"
import React from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
const RegisterPage = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [showPassword, setShowPassword] = React.useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const onSubmit = async (data) => {
    try {
      const response = await httpRequest.post("/register", data)
      console.log(response.data)
      toast.success("Đăng ký thành công!") // Show success toast
      navigate("/dang-nhap")
    } catch (error) {
      console.error(error)
      toast.error("Đăng ký thất bại!") // Show error toast
    }
  }

  return (
    <div className="mx-auto my-10 max-w-md">
      <h3 className="mb-3 text-center font-medium">Đăng Ký</h3>
      <form id="form-register" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="mb-1 block">
            Họ Và Tên
          </label>
          <input
            type="text"
            id="name"
            className="input input-bordered w-full"
            {...register("name", { required: "Họ và tên là bắt buộc" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="mb-1 block">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input input-bordered w-full"
            {...register("email", { required: "Email là bắt buộc" })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="relative mb-3">
          <label htmlFor="password" className="mb-1 block">
            Mật Khẩu
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="input input-bordered w-full"
            {...register("password", { required: "Mật khẩu là bắt buộc" })}
          />
          <i
            className="fa-solid fa-eye absolute right-0 top-0 mr-3 mt-2 cursor-pointer"
            onClick={togglePasswordVisibility}
          ></i>
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className="relative mb-3">
          <label htmlFor="confirmPassword" className="mb-1 block">
            Nhập Lại Mật Khẩu
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            className="input input-bordered w-full"
            {...register("confirmPassword", {
              required: "Nhập lại mật khẩu là bắt buộc",
            })}
          />
          <i
            className="fa-solid fa-eye absolute right-0 top-0 mr-3 mt-2 cursor-pointer"
            onClick={togglePasswordVisibility}
          ></i>
          {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="btn w-full rounded bg-red-600 py-2 text-white"
          >
            Đăng Ký
          </button>
        </div>
        <p className="mb-2 flex items-center gap-2">
          Bạn đã có tài khoản?{" "}
          <a className="text-red-600" href="#!login">
            Đăng Nhập Ngay
          </a>
        </p>
        <a href="#!password/forgot" className="text-red-600">
          Quên Mật Khẩu
        </a>
      </form>
      <p className="my-3 text-center font-bold">Hoặc</p>
      <div className="flex flex-col gap-3">
        <div className="flex cursor-pointer items-center justify-center gap-2 rounded bg-blue-600 py-2 text-white">
          <img src={iconFb} alt="Facebook" className="h-5 w-5" />
          <span className="font-medium">Đăng Nhập Với Facebook</span>
        </div>
        <div className="flex cursor-pointer items-center justify-center gap-2 rounded bg-red-600 py-2 text-white">
          <img src={iconGg} alt="Google" className="h-5 w-5" />
          <span className="font-medium">Đăng Nhập Với Google</span>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
