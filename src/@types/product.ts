interface Product {
    id: number
    name: string
    brand: string
    description?: string
    category_id: number
    image: string
    variants?: []
}

interface Attribute {
    id: number
    name: string
    attribute_values?: AttributeValue[]
}

interface AttributeValue {
    id: number
    value: string
    attribute_id: number
}

interface AttributeValues {
    [key: number]: AttributeValue[]
}

interface Variant {
    price: number
    price_promotional: number
    quantity: number
    attributes: {
        [key: string]: string | undefined
    }
}

export type { Attribute, AttributeValue, Product, Variant, AttributeValues }
