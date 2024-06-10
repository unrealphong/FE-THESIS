interface Product {
  id: number
  name: string
  brand: string
  description?: string
  categoryId: string
  images: ProductImage[]
  variants: Variant[]
}

interface Attribute {
  id: number
  name: string
  type: string
}

interface AttributeValue {
  id: number
  value: string
  attribute_id: number
  attribute: Attribute
}

interface Variant {
  id?: number
  product_id?: number
  price: number
  quantity: number
  attributes?: Attribute[]
  attribute_values?: AttributeValue[]
}

interface ProductImage {
  url: string
  alt?: string
  title?: string
}

export type { Attribute, AttributeValue, Product, Variant }
