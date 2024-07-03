import Section from '@/src/app/[lang]/(protected)/(browse)/components/Section';
import { getPopularMovies } from '@/src/app/[lang]/(protected)/lib/getPopularMovies';
import { Locale } from '@/src/types';

interface Props {
  params: {
    lang: Locale;
  };
}

const HomePage: React.FC<Props> = async ({ params: { lang } }) => {
  return (
    <>
      <Section
        fetchDataFn={getPopularMovies}
        lang={lang}
        title='Popular Movies'
      />
    </>
  );
};

export default HomePage;
