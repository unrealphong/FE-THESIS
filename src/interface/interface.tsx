export interface Category {
  _id: string
  title: string
  createdAt: string
  updatedAt: string
  __v: number
}

interface Variant {
  size: string
  color: string
  quantity: number
  _id: string
}
// export interface Rating {
//     star: number;
//     postedBy: PostedBy;
//     comment: string;
//     _id: string;
// }
export interface Product {
  _id: string
  title: string
  slug: string
  description: string
  price: number
  sale: number
  category: Category
  numberView: number
  images: string[]
  variants: Variant[]
  totalRating: number
  rating: []
  createdAt: string
  updatedAt: string
  __v: number
  isFlashSale: boolean
}
