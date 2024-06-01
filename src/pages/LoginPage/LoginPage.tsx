import iconFb from "@/assets/images/icons/icon-fb.svg"
import iconGg from "@/assets/images/icons/icon-gg.svg"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { object, string } from "zod"

const loginSchema = object({
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
})

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  })
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const navigate = useNavigate()

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
      navigate("/")
    }
  }, [navigate])

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3056/api/auth/login", data)
      console.log(response.data)
      const { accessToken } = response.data
      localStorage.setItem("accessToken", accessToken) // Lưu accessToken vào localStorage
      navigate("/") // Chuyển hướng đến trang Home
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="mx-auto my-10 max-w-md">
      <h3 className="mb-3 text-center font-medium">Đăng Nhập</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input input-bordered w-full max-w-md"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="relative my-2">
          <label htmlFor="password" className="mb-1 block">
            Mật Khẩu
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="input input-bordered w-full max-w-md"
            {...register("password")}
          />
          <i
            className="fa-solid fa-eye absolute right-0 top-0 mr-3 mt-2 cursor-pointer"
            onClick={togglePasswordVisibility}
          ></i>
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="btn w-full rounded bg-red-600 py-2 text-white"
          >
            Đăng Nhập
          </button>
        </div>
        <p className="mb-2 flex items-center gap-2">
          Bạn chưa có tài khoản?{" "}
          <a className="text-red-600" href="#!register">
            Đăng Ký Ngay
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

export default LoginPage
