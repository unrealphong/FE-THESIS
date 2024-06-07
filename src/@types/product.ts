// interface Product {
//   id: string
//   name: string
//   description?: string
//   categoryId: string
//   images: ProductImage[]
//   variants: Variant[]
// }

// interface Variant {
//   size: string
//   color: string
//   originalPrice: number
//   discountedPrice?: number
//   quantity: number
// }
// interface ProductImage {
//   url: string
//   alt?: string
//   title?: string
// }

// export type { Product, ProductImage, Variant }

export interface Product {
  _id: string
  title: string
  images: [string]
  slug: string
  description: string
  price: number
  sale: number
  category: { title: string } 
  numberView: number
  rating: { star: number; comment: string }[]
  isFlashSale: boolean
  totalRating: number
}
