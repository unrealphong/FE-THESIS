export interface Product {
  _id: string
  title: string
  images: [string]
  slug: string
  description: string
  price: number
  sale: number
  category: { title: string } // Assuming category has a 'title' field
  numberView: number
  rating: { star: number; comment: string }[]
  isFlashSale: boolean
  totalRating: number
}
