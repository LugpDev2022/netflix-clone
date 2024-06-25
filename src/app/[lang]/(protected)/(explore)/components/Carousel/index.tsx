'use client';

import { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styles from './carousel.module.css';

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const ref = slidesContainerRef.current;

    if (!ref) return;

    const handleScroll = () => {
      if (!ref) return;

      setScrollPosition(ref.scrollLeft);
    };

    slidesContainerRef.current.addEventListener('scroll', handleScroll);

    return () => {
      if (!ref) return;
      ref.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (!containerRef.current || !slidesContainerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;

    slidesContainerRef.current.scrollBy({
      left: -containerWidth,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    if (!containerRef.current || !slidesContainerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;

    slidesContainerRef.current.scrollBy({
      left: containerWidth,
      behavior: 'smooth',
    });
  };

  const maxScroll = slidesContainerRef.current
    ? slidesContainerRef?.current.scrollWidth -
      slidesContainerRef?.current.clientWidth
    : 100;

  return (
    <div className={styles.container} ref={containerRef}>
      {/* Render just if scrolled */}
      {scrollPosition === 0 ? (
        <></>
      ) : (
        <button className={styles.leftArrow} onClick={scrollLeft}>
          <MdKeyboardArrowLeft size={30} />
        </button>
      )}

      {/* Do not render if max scroll */}
      {scrollPosition >= maxScroll ? (
        <></>
      ) : (
        <button className={styles.rightArrow} onClick={scrollRight}>
          <MdKeyboardArrowRight size={30} />
        </button>
      )}

      <div
        className={`${styles.slidesContainer} no-scrollbar`}
        ref={slidesContainerRef}
      >
        <div className='h-[250px] w-[200px] bg-gray-300 shrink-0'></div>
        <div className='h-[250px] w-[200px] bg-gray-300 shrink-0'></div>
        <div className='h-[250px] w-[200px] bg-gray-300 shrink-0'></div>
        <div className='h-[250px] w-[200px] bg-gray-300 shrink-0'></div>
        <div className='h-[250px] w-[200px] bg-gray-300 shrink-0'></div>
        <div className='h-[250px] w-[200px] bg-gray-300 shrink-0'></div>
        <div className='h-[250px] w-[200px] bg-gray-300 shrink-0'></div>
        <div className='h-[250px] w-[200px] bg-gray-300 shrink-0'></div>
        <div className='h-[250px] w-[200px] bg-gray-300 shrink-0'></div>
      </div>
    </div>
  );
};

export default Carousel;
