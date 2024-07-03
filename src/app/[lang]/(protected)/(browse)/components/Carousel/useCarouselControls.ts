import { useEffect, useState, RefObject, useCallback } from 'react';

export const useCarouselControls = (
  containerRef: RefObject<HTMLDivElement>,
  slidesContainerRef: RefObject<HTMLDivElement>
) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const ref = slidesContainerRef.current;
    if (!ref) return;

    const handleScroll = () => {
      setScrollPosition(ref.scrollLeft);
    };

    ref.addEventListener('scroll', handleScroll);
    return () => ref.removeEventListener('scroll', handleScroll);
  }, [slidesContainerRef]);

  const scrollLeft = useCallback(() => {
    const container = containerRef.current;
    const slidesContainer = slidesContainerRef.current;
    if (!container || !slidesContainer) return;

    const containerWidth = container.clientWidth;

    slidesContainer.scrollBy({
      left: -containerWidth,
      behavior: 'smooth',
    });
  }, [containerRef, slidesContainerRef]);

  const scrollRight = useCallback(() => {
    const container = containerRef.current;
    const slidesContainer = slidesContainerRef.current;
    if (!container || !slidesContainer) return;

    const containerWidth = container.clientWidth;

    slidesContainer.scrollBy({
      left: containerWidth,
      behavior: 'smooth',
    });
  }, [containerRef, slidesContainerRef]);

  const maxScroll = slidesContainerRef.current
    ? slidesContainerRef.current.scrollWidth -
      slidesContainerRef.current.clientWidth
    : 100;

  return { scrollPosition, scrollLeft, scrollRight, maxScroll };
};
