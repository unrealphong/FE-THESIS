import { AuthResponse, LoginSuccessInfo } from "@/@types/auth"
import httpRequest from "@/api/axios-instance"

export const loginUser = async (
    username: string,
    password: string,
): Promise<LoginSuccessInfo | null> => {
    try {
        const response = await httpRequest.post<AuthResponse>("/login", {
            username,
            password,
        })

        if (response.data && response.data.success) {
            return {
                accessToken: response.data.accessToken || "",
                refreshToken: response.data.refreshToken || "",
                expiresIn: response.data.expiresIn || 0,
            }
        }
        return null
    } catch (error) {
        console.error("An error occurred during login:", error)
        return null
    }
}
