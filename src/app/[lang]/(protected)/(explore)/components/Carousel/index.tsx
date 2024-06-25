'use client';

import { useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styles from './carousel.module.css';

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className={styles.container} ref={containerRef}>
      <button className={styles.leftArrow} onClick={scrollLeft}>
        <MdKeyboardArrowLeft size={30} />
      </button>
      <button className={styles.rightArrow} onClick={scrollRight}>
        <MdKeyboardArrowRight size={30} />
      </button>
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
