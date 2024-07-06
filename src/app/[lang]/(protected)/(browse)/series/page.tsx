import Section from '@/src/app/[lang]/(protected)/(browse)/components/Section';
import { fetchTMDB } from '@/src/app/[lang]/(protected)/lib/fetchTMDB';
import { getPopularSeries } from '@/src/app/[lang]/(protected)/lib/getPopularSeries';
import { getGenresId } from '@/src/app/[lang]/(protected)/lib/getGenresId';
import { Locale } from '@/src/types';

interface Props {
  params: {
    lang: Locale;
  };
}

const SeriesPage: React.FC<Props> = async ({ params: { lang } }) => {
  const [errs, genres] = await getGenresId('movie', lang);

  console.log(genres);

  return (
    <>
      <Section
        fetchDataFn={getPopularSeries}
        lang={lang}
        title='Popular Series'
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

export default SeriesPage;
