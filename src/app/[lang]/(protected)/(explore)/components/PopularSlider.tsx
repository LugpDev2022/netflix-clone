import Link from 'next/link';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface Props {
  data: {}[];
}

const PopularSlider: React.FC<Props> = ({ data }) => {
  return (
    <div className='popular-slider-container'>
      <button className='left-arrow'>
        <MdKeyboardArrowLeft size={30} />
      </button>
      <button className='right-arrow'>
        <MdKeyboardArrowRight size={30} />
      </button>
      <div className='popular-slider'>
        <ul>
          {data.map((item: any) => {
            return (
              <li
                key={item.id}
                className={`popular-slider-item bg-[url("https://image.tmdb.org/t/p/original${item.backdrop_path}")]`}
              >
                <div className='bg-gradient-to-b from-black/80 via-black/50 to-black/80 w-full h-full absolute top-0 left-0 z-0'></div>
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
            className='popular-slider-dot'
            // className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
            // onClick={() => goToSlide(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PopularSlider;
