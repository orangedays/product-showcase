import { useEffect, useLayoutEffect } from 'react';

interface ScrollPositionHookProps {
  page: number;
  isLoading: boolean;
  scrollPosition: number;
  onScrollPositionChange: (position: number) => void;
}
/**
 * Listen for page changes, scroll to top, and record scroll position
 * @param page Current page number
 * @param isLoading Loading state
 * @param scrollPosition Scroll position
 * @param onScrollPositionChange Callback for scroll position changes
 */
const useScrollPosition = ({
  page,
  isLoading,
  scrollPosition,
  onScrollPositionChange,
}: ScrollPositionHookProps) => {
  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  // Record scroll position
  useEffect(() => {
    const handleScroll = () => {
      onScrollPositionChange(window.scrollY);
    };

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [onScrollPositionChange]);

  // Restore scroll position
  useLayoutEffect(() => {
    if (!isLoading && scrollPosition > 0) {
      window.scrollTo(0, scrollPosition);
    }
  }, [isLoading, scrollPosition]);
};

export default useScrollPosition;
