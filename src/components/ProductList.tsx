import Tag from '@/components/common/Tag';
import FallbackImage from '@/components/common/FallbackImage';
import { Product } from '@/types/product';
import useProductStore from '@/store/productStore';

interface ProductListProps {
  product: Product;
}

const ProductList = ({ product }: ProductListProps) => {
  const setSelectedProductId = useProductStore(state => state.setSelectedProductId);

  return (
    <div
      className="rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
      onClick={() => setSelectedProductId(product.id)}
    >
      <div className="flex">
        <FallbackImage
          src={product.images[0]}
          alt={product.title}
          className="w-56 h-56  flex-shrink-0"
          imageClassName="object-cover"
        />

        <div className="flex-1 p-6">
          <div className="mb-4 flex items-start gap-2">
            <Tag>{product.category.name}</Tag>
            <h3 className="text-xl">{product.title}</h3>
          </div>
          <p className="text-gray-600 mb-4 text-sm line-clamp-2">{product.description}</p>
          <p className="text-2xl font-bold text-blue-600">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
