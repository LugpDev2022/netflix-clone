import Section from '@/src/app/[lang]/(protected)/(browse)/components/Section';
import { Locale } from '@/src/types';
import { fetchTMDB } from '../../lib/fetchTMDB';
import { getAllPopular } from '../../lib/getAllPopular';

interface Props {
  params: {
    lang: Locale;
  };
}

const HomePage: React.FC<Props> = async ({ params: { lang } }) => {
  return (
    <>
      <Section fetchDataFn={getAllPopular} lang={lang} title='Popular' />
      <Section
        fetchDataFn={() => fetchTMDB(lang, '/movie/top_rated', 'movie')}
        lang={lang}
        title='Top Rated Movies'
      />
      <Section
        fetchDataFn={() => fetchTMDB(lang, '/movie/now_playing', 'movie')}
        lang={lang}
        title='Now Playing'
      />
      <Section
        fetchDataFn={() => fetchTMDB(lang, '/tv/top_rated', 'tv')}
        lang={lang}
        title='Top Rated Series'
      />
      <Section
        fetchDataFn={() => fetchTMDB(lang, '/tv/on_the_air', 'tv')}
        lang={lang}
        title='On Air Series'
      />
    </>
  );
};

export default HomePage;
