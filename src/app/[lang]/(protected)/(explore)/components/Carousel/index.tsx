'use client';

import { useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import Card from '@/src/app/[lang]/(protected)/components/PosterCard';
import { useCarouselControls } from './useCarouselControls';
import styles from './carousel.module.css';
import { Locale, TMDBData } from '@/src/types';

interface Props {
  data: TMDBData[];
  lang: Locale;
}

const Carousel: React.FC<Props> = ({ data, lang }) => {
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
        {data.map(({ id, title, poster_path, type }) => (
          <div key={id}>{title}</div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
