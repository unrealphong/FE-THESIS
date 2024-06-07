interface User {
  id: string
  username: string
  email: string
  password: string
  role: UserRole
  phones: PhoneNumber[] // Một mảng các số điện thoại của người dùng
  createdAt: Date
  updatedAt: Date
}

interface PhoneNumber {
  number: string
  shippingAddresses: Address[] // Danh sách các địa chỉ giao hàng ứng với số điện thoại này
}

interface Address {
  street: string
  city: string
  state: string
  country: string
  postalCode: string
}

type UserRole = "customer" | "admin"

export type { Address, PhoneNumber, User, UserRole }
