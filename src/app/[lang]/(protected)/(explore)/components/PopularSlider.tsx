'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { usePopularSliderControls } from '@/src/app/[lang]/(protected)/(explore)/hooks/usePopularSliderControls';

interface Props {
  data: {}[];
}

const PopularSlider: React.FC<Props> = ({ data }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const { scrollToImage, goToSlide, currentIndex } = usePopularSliderControls(
    listRef,
    data.length
  );

  return (
    <div className='popular-slider-container'>
      <button className='left-arrow' onClick={() => scrollToImage('prev')}>
        <MdKeyboardArrowLeft size={30} />
      </button>
      <button className='right-arrow' onClick={() => scrollToImage('next')}>
        <MdKeyboardArrowRight size={30} />
      </button>
      <div className='popular-slider'>
        <ul ref={listRef}>
          {data.map((item: any) => {
            return (
              <li key={item.id} className='popular-slider-item'>
                <div className='w-full h-full absolute top-0 left-0'>
                  <div className='bg-gradient-to-b from-black/80 via-black/50 to-black/80 w-full h-full absolute top-0 left-0'></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                    alt='Poster'
                  />
                </div>

                <div className='popular-slider-info-container'>
                  <h2>Inside Out 2</h2>
                  <time dateTime='2024'>2024</time>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat odit laudantium consequuntur eum beatae. Cumque
                    minima aperiam illum similique sapiente!
                  </p>

                  <Link href='/'>Go to movie</Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='popular-slider-dots'>
        {data.map((_, i) => (
          <button
            key={i}
            className={` ${
              i === currentIndex
                ? 'popular-slider-dot-active'
                : 'popular-slider-dot'
            }`}
            onClick={() => goToSlide(i)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PopularSlider;
