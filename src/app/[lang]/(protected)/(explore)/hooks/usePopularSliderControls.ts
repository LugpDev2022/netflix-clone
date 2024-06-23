import { RefObject, useEffect, useState } from 'react';

export const usePopularSliderControls = (
  listRef: RefObject<HTMLUListElement>,
  dataLength: number
) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!listRef.current) return;

    const imgNode = listRef.current.querySelectorAll('li img')[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [currentIndex, listRef]);

  const scrollToImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex((curr) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      });
    } else {
      const isLastSlide = currentIndex === dataLength - 1;
      if (!isLastSlide) {
        setCurrentIndex((curr) => curr + 1);
      }
    }
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return { scrollToImage, goToSlide, currentIndex };
};
