// Import các type hoặc interface cần thiết
import { User } from "./user"

export interface LoginSuccessInfo {
    accessToken: string
    refreshToken: string
    expiresIn: number
}

export interface AuthResponse {
    success: boolean
    message?: string
    user?: User
    accessToken?: string
    refreshToken?: string
    expiresIn?: number
}

export interface AuthState {
    accessToken: string | null
    loading: boolean
    user: User | null
    error: string | null
    success: boolean
}
