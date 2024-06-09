interface Variant {
  id: number
  price: number
  quantity: number
}

interface Attribute {
  id: number
  name: string
  type: string
}
interface AttributeValue {
  id: number
  value: string
}
export type { Attribute, AttributeValue, Variant }
