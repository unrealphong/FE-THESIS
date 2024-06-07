
import { Category } from "@/@types/category";
import thumbnail1 from "@/assets/images/block-item-1.webp"
interface CategoryInListProductProps {
    data: Category;
}
const CategoryInHomePage: React.FC<CategoryInListProductProps> = ({data}) => {
  return (
    <>
          <div className="w-1/6">
              <a href="#">
                  <div className="thumbnail my-2">
                      <img
                          src={thumbnail1}
                          alt=""
                          className="h-40 w-40 rounded-full object-cover"
                      />
                  </div>
                  <div className="thumbnail-name my-2">
                      <p className="text-center text-2xl font-medium">{data?.title}</p>
                  </div>
              </a>
          </div>
    </>
  )
}

export default CategoryInHomePage