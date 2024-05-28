import iconFb from "@/assets/images/icons/icon-fb.svg"
import iconGg from "@/assets/images/icons/icon-gg.svg"
import { useState } from "react"
const RegisterPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="mx-auto my-10 max-w-md ">
      <h3 className="mb-3 text-center font-medium">Đăng Ký</h3>
      <form id="form-register" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="mb-1 block">
            Họ Và Tên
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="mb-1 block">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative mb-3">
          <label htmlFor="password" className="mb-1 block">
            Mật Khẩu
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            className="fa-solid fa-eye absolute right-0 top-0 mr-3 mt-2 cursor-pointer"
            onClick={togglePasswordVisibility}
          ></i>
        </div>
        <div className="relative mb-3">
          <label htmlFor="confirmPassword" className="mb-1 block">
            Nhập Lại Mật Khẩu
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            className="input input-bordered w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <i
            className="fa-solid fa-eye absolute right-0 top-0 mr-3 mt-2 cursor-pointer"
            onClick={togglePasswordVisibility}
          ></i>
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
