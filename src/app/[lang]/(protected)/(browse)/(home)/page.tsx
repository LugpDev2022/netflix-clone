import Section from '@/src/app/[lang]/(protected)/(browse)/components/Section';
import { fetchTMDB } from '@/src/app/[lang]/(protected)/lib/fetchTMDB';
import { getAllPopular } from '@/src/app/[lang]/(protected)/lib/getAllPopular';
import { Locale } from '@/src/types';
import { getDictionary } from '../../../dictionaries';

interface Props {
  params: {
    lang: Locale;
  };
}

const HomePage: React.FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <>
      <Section
        fetchDataFn={getAllPopular}
        lang={lang}
        title={dict.app.browse.sections.home.popular}
      />
      <Section
        fetchDataFn={() => fetchTMDB(lang, '/movie/top_rated', 'movie')}
        lang={lang}
        title={dict.app.browse.sections.movies.topRated}
      />
      <Section
        fetchDataFn={() => fetchTMDB(lang, '/movie/now_playing', 'movie')}
        lang={lang}
        title={dict.app.browse.sections.movies.upcoming}
      />
      <Section
        fetchDataFn={() => fetchTMDB(lang, '/tv/top_rated', 'tv')}
        lang={lang}
        title={dict.app.browse.sections.series.topRated}
      />
      <Section
        fetchDataFn={() => fetchTMDB(lang, '/tv/on_the_air', 'tv')}
        lang={lang}
        title={dict.app.browse.sections.series.onAir}
      />
    </>
  );
};

export default HomePage;
