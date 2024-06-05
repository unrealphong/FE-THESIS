interface Product {
  id: string
  name: string
  description?: string
  categoryId: string
  images: ProductImage[]
  variants: Variant[]
}

interface Variant {
  size: string
  color: string
  originalPrice: number
  discountedPrice?: number
  quantity: number
}
interface ProductImage {
  url: string
  alt?: string
  title?: string
}

export type { Product, ProductImage, Variant }
