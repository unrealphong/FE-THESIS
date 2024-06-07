import { Product } from "@/@types/product"
type Props = {
  data: Product
}
const ProductNewInHomePage = ({ data }: Props) => {
  return (
    <>
      <div className="tw-card text-surface shadow-secondary-1 dark:bg-surface-dark block max-w-[18rem] rounded-lg bg-white dark:text-white">
        <div className="h-100 relative overflow-hidden bg-cover bg-no-repeat">
          <img src={data?.images[0]} alt="" />
        </div>
        <div className="pt-3">
          <h5 className="mb-2 text-xl font-medium leading-tight">{data?.title}</h5>
          <p className="text-base">{data?.description}</p>
        </div>
      </div>
    </>
  )
}

export default ProductNewInHomePage
