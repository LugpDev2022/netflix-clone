import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styles from './carousel.module.css';

const Carousel = () => {
  return (
    <div className={styles.container}>
      <button className={styles.leftArrow}>
        <MdKeyboardArrowLeft size={30} />
      </button>
      <button className={styles.rightArrow}>
        <MdKeyboardArrowRight size={30} />
      </button>
      <div className={`${styles.slidesContainer} no-scrollbar`}>
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
