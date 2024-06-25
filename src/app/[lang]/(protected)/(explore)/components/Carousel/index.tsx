'use client';

import { useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styles from './carousel.module.css';
import { useCarouselControls } from './useCarouselControls';

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const { maxScroll, scrollLeft, scrollPosition, scrollRight } =
    useCarouselControls(containerRef, slidesContainerRef);

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
