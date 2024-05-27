import { Category } from "../interface/interface"

interface CategoriDetailProps {
  categories: Category
}
const ListCategory_Product: React.FC<CategoriDetailProps> = ({ categories }) => {
  return (
    <div key={categories?._id}>
      <a
        href="#!product?category_id={{ category._id }}"
        className="nav-link w-100 fs-6 fw-medium custom-pd mb-3 ng-binding ng-scope"
        ng-repeat="category in categories"
      >
        {categories?.title}
      </a>
    </div>
  )
}

export default ListCategory_Product
