import iconFb from "@/assets/images/icons/icon-fb.svg"
import iconGg from "@/assets/images/icons/icon-gg.svg"
import { useState } from "react"
const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSubmitted(true)

    if ((e.target as HTMLFormElement).checkValidity()) {
      // Handle form submission
    }
  }

  return (
    <div className="mx-auto my-10 max-w-md">
      <h3 className="mb-3 text-center font-medium">Đăng Nhập</h3>
      <form
        onSubmit={handleSubmit}
        className={`needs-validation ${formSubmitted ? "was-validated" : ""}`}
        noValidate
      >
        <div className="my-2">
          <label htmlFor="email" className=" label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input input-bordered w-full max-w-md"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="mt-1 text-red-500">
            {formSubmitted && !email && "Vui lòng nhập email hợp lệ."}
          </div>
        </div>
        <div className="my-2">
          <label htmlFor="password" className="mb-1 block">
            Mật Khẩu
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="input input-bordered w-full max-w-md"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            className="fa-solid fa-eye absolute right-0 top-0 mr-3 mt-2 cursor-pointer"
            onClick={togglePasswordVisibility}
          ></i>
        </div>
        <div className="mb-3">
          <button className="btn w-full rounded bg-red-600 py-2 text-white">
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
