import { useQuery } from '@tanstack/react-query';
import { Product, ProductsResponse } from '@/types/product';
import useProductStore from '@/store/productStore';

const API_URL = 'https://api.escuelajs.co/api/v1';
const ITEMS_PER_PAGE = 10;

const fetchProducts = async (page: number): Promise<ProductsResponse> => {
  const offset = page * ITEMS_PER_PAGE;
  const response = await fetch(`${API_URL}/products?offset=${offset}&limit=${ITEMS_PER_PAGE}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const products = await response.json();
  return {
    products,
    total: 90,
  };
};

const fetchProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const useProducts = () => {
  const currentPage = useProductStore(state => state.currentPage);

  return useQuery({
    queryKey: ['products', currentPage],
    queryFn: () => fetchProducts(currentPage),
  });
};

export const useProduct = (id: number | null) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id!),
    enabled: !!id,
  });
};
