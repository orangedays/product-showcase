import Image from 'next/image';
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
        <div className="relative w-56 h-56 flex-shrink-0">
          <Image src={product.images[0]} alt={product.title} fill className="object-cover" />
        </div>
        <div className="flex-1 p-6">
          <div className="mb-4 flex items-start gap-2">
            <span className="relative top-[2px] px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
              {product.category.name}
            </span>
            <h3 className="text-xl">{product.title}</h3>
          </div>
          <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
          <p className="text-2xl font-bold text-blue-600">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
