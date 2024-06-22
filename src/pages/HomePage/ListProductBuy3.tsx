import { GetProductBuy3 } from "@/api/services/ProductService"
import { useEffect, useState } from "react"
import ProductInListProductBuy3 from "./ProductInListProductBuy3"

const ListProductBuy3 = () => {
    const [products, setProducts] = useState<any>([])
    useEffect(() => {
        const fetchProducts = async () => {
            const allProducts: any = await GetProductBuy3()
            const limitedProducts = allProducts?.product?.slice(0, 10)
            setProducts(limitedProducts)
        }

        fetchProducts()
    }, [])

    return (
        <>
            <div className="block-new-product-item grid grid-cols-1 gap-4 md:grid-cols-5">
                {products?.map((data: any) => {
                    return (
                        <>
                            <ProductInListProductBuy3 data={data} />
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default ListProductBuy3
