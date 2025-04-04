import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const INITIAL_STATE = {
  selectedProductId: null,
  currentPage: 0,
  scrollPosition: 0,
} as const;

interface ProductStore {
  selectedProductId: number | null;
  setSelectedProductId: (id: number | null) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  scrollPosition: number;
  setScrollPosition: (position: number) => void;
}

const useProductStore = create<ProductStore>()(
  persist(
    set => ({
      ...INITIAL_STATE,
      setSelectedProductId: id => set({ selectedProductId: id }),
      setCurrentPage: page => set({ currentPage: page, scrollPosition: 0 }),
      setScrollPosition: position => set({ scrollPosition: position }),
    }),
    {
      name: 'product-store',
    },
  ),
);

export default useProductStore;
