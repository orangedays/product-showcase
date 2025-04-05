import Loading from '@/components/common/Loading';
import Tag from '@/components/common/Tag';
import FallbackImage from '@/components/common/FallbackImage';
import { useProduct } from '@/hooks/api/useProducts';
import useProductStore from '@/store/productStore';

const ProductDetail = () => {
  const selectedProductId = useProductStore(state => state.selectedProductId);
  const setSelectedProductId = useProductStore(state => state.setSelectedProductId);
  const { data: product, isLoading } = useProduct(selectedProductId);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedProductId(null);
    }
  };

  const renderProductContent = () => {
    if (isLoading) return <Loading />;
    if (!product) return null;

    return (
      <div className="p-6 pt-14">
        <div className="mb-4 flex items-start gap-2">
          <Tag>{product.category.name}</Tag>
          <h2 className="text-xl">{product.title}</h2>
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            {product.images.map((image, index) => (
            
                <FallbackImage 
                  key={index}
                  src={image} 
                  alt={`${product.title} - Image ${index + 1}`} 
                  className="w-full"
                />
     
            ))}
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">{product.description}</p>
            <p className="text-2xl font-bold text-blue-600">${product.price}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          selectedProductId ? 'opacity-50 visible' : 'opacity-0 invisible'
        }`}
        onClick={handleBackdropClick}
      />
      <div
        className={`fixed right-0 top-0 h-full w-[600px] bg-white shadow-xl transform transition-all duration-300 ease-in-out ${
          selectedProductId ? 'translate-x-0' : 'translate-x-full'
        } ${selectedProductId ? 'visible' : 'invisible'}`}
      >
        <button
          onClick={() => setSelectedProductId(null)}
          className="absolute right-8 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer"
        >
          X
        </button>
        <div className="h-full overflow-y-auto">{renderProductContent()}</div>
      </div>
    </>
  );
};

export default ProductDetail;
