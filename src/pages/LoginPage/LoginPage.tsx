import { useState } from "react"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)

    if (e.target.checkValidity()) {
      // Handle form submission
    }
  }

  return (
    <main>
      <div className="mt-5 mx-auto max-w-md">
        <h3 className="text-center mb-3 font-medium">Đăng Nhập</h3>
        <form
          onSubmit={handleSubmit}
          className={`needs-validation ${formSubmitted ? "was-validated" : ""}`}
          noValidate
        >
          <div className="mb-3">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input w-full input is-primary"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="text-red-500 mt-1">
              {formSubmitted && !email && "Vui lòng nhập email hợp lệ."}
            </div>
          </div>
          <div className="mb-3 relative">
            <label htmlFor="password" className="block mb-1">
              Mật Khẩu
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="form-input w-full input is-primary"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className="fa-solid fa-eye absolute top-0 right-0 mt-2 mr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          <div className="mb-3">
            <button className="btn bg-red-600 text-white w-full py-2 rounded">
              Đăng Nhập
            </button>
          </div>
          <p className="flex items-center gap-2 mb-2">
            Bạn chưa có tài khoản?{" "}
            <a className="text-red-600" href="#!register">
              Đăng Ký Ngay
            </a>
          </p>
          <a href="#!password/forgot" className="text-red-600">
            Quên Mật Khẩu
          </a>
        </form>
        <p className="text-center font-bold my-3">Hoặc</p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center gap-2 py-2 rounded bg-blue-600 text-white cursor-pointer">
            <img
              src="./src/assets/img/icon/icon-fb.svg"
              alt="Facebook"
              className="w-5 h-5"
            />
            <span className="font-medium">Đăng Nhập Với Facebook</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2 rounded bg-red-600 text-white cursor-pointer">
            <img
              src="./src/assets/img/icon/icon-gg.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="font-medium">Đăng Nhập Với Google</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LoginPage
