import { AuthResponse, LoginSuccessInfo } from "@/@types/auth"
import httpRequest from "@/api/axios-instance"
import { toast } from "react-toastify"

const login = async (
    email: string,
    password: string,
): Promise<LoginSuccessInfo | null> => {
    try {
        const response = await httpRequest.post<AuthResponse>("/login", {
            email,
            password,
        })
        console.log(response.data.data.data.role_id)

        if (response.data.data) {
            toast.success("Đăng nhập thành công!")
            return {
                role: response.data.data.data.role_id,
                accessToken: response.data.data.token || "",
                refreshToken: response.data.refreshToken || "",
                expiresIn: response.data.expiresIn || 0,
            }
        } else {
            toast.error("Đăng nhập thất bại!")
            return null
        }
    } catch (error) {
        console.error("An error occurred during login:", error)
        toast.error("Đăng nhập thất bại!")
        return null
    }
}

const register = async (
    name: string,
    password: string,
    email: string,
): Promise<boolean> => {
    try {
        const response = await httpRequest.post("/register", {
            name,
            password,
            email,
        })

        if (response.data && response.data.success) {
            toast.success("Đăng ký thành công!")
            return true
        } else {
            toast.error("Đăng ký thất bại!")
            return false
        }
    } catch (error) {
        console.error("An error occurred during registration:", error)
        toast.error("Đăng ký thất bại!")
        return false
    }
}

export { login, register }
