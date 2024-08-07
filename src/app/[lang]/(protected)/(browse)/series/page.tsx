import Section from '@/src/app/[lang]/(protected)/(browse)/components/Section';
import {
  getPopularSeries,
  fetchTMDB,
  getGenresId,
  getByGenre,
} from '@/src/app/[lang]/(protected)/lib';
import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';

interface Props {
  params: {
    lang: Locale;
  };
}

const SeriesPage: React.FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);
  const [errs, genres] = await getGenresId('tv', lang);

  return (
    <>
      <Section
        fetchDataFn={getPopularSeries}
        lang={lang}
        title={dict.app.browse.sections.series.popular}
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

      {genres?.map(({ id, name }) => (
        <Section
          key={id}
          fetchDataFn={() => getByGenre('tv', lang, id)}
          lang={lang}
          title={name}
        />
      ))}
    </>
  );
};

export default SeriesPage;
