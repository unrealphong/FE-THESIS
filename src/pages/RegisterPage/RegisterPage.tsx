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
    <main className="body">
      <div className="mt-5 mx-auto max-w-md">
        <h3 className="text-center mb-3 font-medium">Đăng Ký</h3>
        <form id="form-register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="block mb-1">
              Họ Và Tên
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-input w-full input is-danger"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-input w-full input is-danger"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 relative">
            <label htmlFor="password" className="block mb-1">
              Mật Khẩu
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className="form-input w-full input is-danger"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className="fa-solid fa-eye absolute top-0 right-0 mt-2 mr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          <div className="mb-3 relative">
            <label htmlFor="confirmPassword" className="block mb-1">
              Nhập Lại Mật Khẩu
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              className="form-input w-full input is-danger"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <i
              className="fa-solid fa-eye absolute top-0 right-0 mt-2 mr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="btn bg-red-600 text-white w-full py-2 rounded"
            >
              Đăng Ký
            </button>
          </div>
          <p className="flex items-center gap-2 mb-2">
            Bạn đã có tài khoản?{" "}
            <a className="text-red-600" href="#!login">
              Đăng Nhập Ngay
            </a>
          </p>
          <a href="#!password/forgot" className="text-red-600">
            Quên Mật Khẩu
          </a>
        </form>
        <p className="text-center font-bold my-3">Hoặc</p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center gap-2 py-2 rounded bg-blue-600 text-white cursor-pointer">
            <img src={iconFb} alt="Facebook" className="w-5 h-5" />
            <span className="font-medium">Đăng Nhập Với Facebook</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2 rounded bg-red-600 text-white cursor-pointer">
            <img src={iconGg} alt="Google" className="w-5 h-5" />
            <span className="font-medium">Đăng Nhập Với Google</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default RegisterPage
