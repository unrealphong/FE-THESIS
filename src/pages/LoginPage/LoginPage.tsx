import iconFb from "@/assets/images/icons/icon-fb.svg"
import iconGg from "@/assets/images/icons/icon-gg.svg"
import { Button, Form, Input, Typography } from "antd"
import { Controller, useForm } from "react-hook-form"
import { login } from "@/api/services/AuthService"
import { toast } from "react-toastify"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const { Text, Link } = Typography

const LoginPage = () => {
    const navigate = useNavigate()
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data: { email: string; password: string }) => {
        const { email, password } = data

        try {
            const response = await login(email, password)
            console.log(response)
            if (response && response.accessToken) {
                localStorage.setItem("accessToken", response.accessToken)
                if (response.role == 1) {
                    navigate("/")
                } else if (response.role == 0) {
                    navigate("/thong-ke")
                    toast.success("Hello admin!")
                }
            } else {
                toast.error("Đăng nhập thất bại. Vui lòng thử lại!")
            }
        } catch (error) {
            console.error("Login failed!", error.message)
            toast.error("Đăng nhập thất bại. Vui lòng thử lại!")
        }
    }
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken")
        if (accessToken) {
            navigate("/")
        }
    }, [navigate])
    return (
        <div className="mx-auto my-10 max-w-md">
            <h3 className="mb-3 text-center font-medium">Đăng Nhập</h3>
            <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
                <Form.Item label="Username">
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input size="large" {...field} />}
                    />
                </Form.Item>
                <Form.Item label="Password">
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <Input.Password size="large" {...field} />
                        )}
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        size="large"
                        type="primary"
                        htmlType="submit"
                        className="w-full"
                    >
                        Đăng Nhập
                    </Button>
                </Form.Item>
                <Text className="mb-2 flex items-center gap-2">
                    Bạn chưa có tài khoản?{" "}
                    <Link style={{ color: "red" }} href="#!register">
                        Đăng Ký Ngay
                    </Link>
                </Text>
                <Text>
                    <Link style={{ color: "red" }} href="#!password/forgot">
                        Quên Mật Khẩu
                    </Link>
                </Text>
            </Form>
            <Text className="my-3 text-center font-bold">Hoặc</Text>
            <div className="flex flex-col gap-3">
                <Button
                    size="large"
                    className="flex items-center justify-center gap-2 rounded bg-blue-600 py-2 text-white"
                    icon={<img src={iconFb} alt="Facebook" className="h-5 w-5" />}
                >
                    <span className="font-medium">Đăng Nhập Với Facebook</span>
                </Button>
                <Button
                    size="large"
                    className="flex items-center justify-center gap-2 rounded bg-red-600 py-2 text-white"
                    icon={<img src={iconGg} alt="Google" className="h-5 w-5" />}
                >
                    <span className="font-medium">Đăng Nhập Với Google</span>
                </Button>
            </div>
        </div>
    )
}

export default LoginPage
