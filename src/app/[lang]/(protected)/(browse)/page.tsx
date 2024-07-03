import Carousel from '@/src/app/[lang]/(protected)/(browse)/components/Carousel';
import { getPopularMovies } from '@/src/app/[lang]/(protected)/lib/getPopularMovies';
import { Locale } from '@/src/types';

interface Props {
  params: {
    lang: Locale;
  };
}

const HomePage: React.FC<Props> = async ({ params: { lang } }) => {
  const [err, movies] = await getPopularMovies(lang);

  //TODO: Handle errors
  if (!movies) return;

  return (
    <>
      <h2 className='category-subtitle px-4 md:px-10'>Top 10</h2>
      <Carousel data={movies} lang={lang} />
    </>
  );
};

export default HomePage;
