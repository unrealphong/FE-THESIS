import { User } from "@/@types/user"
import httpRequest from "@/api/axios-instance"
import { toast } from "react-toastify"

const getAllUser = async () => {
    try {
        const response = await httpRequest.get("/users")
        return response.data.data.users
    } catch (error) {
        console.log(error)
    }
}

const createUser = async (user: User): Promise<User> => {
    const response = await httpRequest.post("/users", user)
    return response.data
}
const getUser = async (id: string) => {
    try {
        const response = await httpRequest.get(`/users/${id}`)
        return response.data.data.data
    } catch (error) {
        toast.error("Failed to fetch user details.")
        throw error // Re-throw the error to handle it in the component if needed
    }
}

const updateUser = async (id: number, data: User) => {
    try {
        const response = await httpRequest.put(`/users/${id}`, data)
        return response.data
    } catch (error) {
        toast.error("Failed to update user details.")
        throw error
    }
}
const deleteUser = async (id: number) => {
    try {
        const response = await httpRequest.delete(`/users/${id}`)
        toast.success("User deleted successfully.")
        return response.data
    } catch (error) {
        toast.error("Failed to delete user.")
        throw error
    }
}
export { getAllUser, createUser, getUser, updateUser, deleteUser }
