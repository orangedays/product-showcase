'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useProducts } from '@/hooks/api/useProducts';
import ProductList from '@/components/ProductList';
import Pagination from '@/components/Pagination';
import ProductDetail from '@/components/ProductDetail';
import Loading from '@/components/common/Loading';
import useProductStore from '@/store/productStore';
import useScrollPosition from '@/hooks/useScrollPosition';

const queryClient = new QueryClient();

function ProductsPage() {
  const { data, isLoading } = useProducts();
  const setCurrentPage = useProductStore(state => state.setCurrentPage);
  const currentPage = useProductStore(state => state.currentPage);
  const scrollPosition = useProductStore(state => state.scrollPosition);
  const setScrollPosition = useProductStore(state => state.setScrollPosition);

  useScrollPosition({
    page: currentPage,
    isLoading,
    scrollPosition,
    onScrollPositionChange: setScrollPosition,
  });

  if (isLoading) {
    return <Loading />;
  }

  const totalPages = Math.ceil((data?.total || 0) / 10);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-8">Products</h1>

            <div className="space-y-6">
              {data?.products.map(product => (
                <ProductList key={product.id} product={product} />
              ))}
            </div>
            <ProductDetail />
            <div className="mt-12 mb-8">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsPage />
    </QueryClientProvider>
  );
}
