import Carousel from '@/src/app/[lang]/(protected)/(explore)/components/Carousel';
import { Locale } from '@/src/types';

interface Props {
  params: {
    lang: Locale;
  };
}

const HomePage: React.FC<Props> = ({ params: { lang } }) => {
  return (
    <>
      <h2 className='category-subtitle px-4 md:px-10'>Top 10</h2>
      <Carousel />
    </>
  );
};

export default HomePage;
