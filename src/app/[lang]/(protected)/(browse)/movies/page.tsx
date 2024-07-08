import Section from '@/src/app/[lang]/(protected)/(browse)/components/Section';
import {
  fetchTMDB,
  getGenresId,
  getByGenre,
  getPopularMovies,
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
  const [errs, genres] = await getGenresId('movie', lang);

  return (
    <>
      <Section
        fetchDataFn={getPopularMovies}
        lang={lang}
        title={dict.app.browse.sections.movies.popular}
      />
      <Section
        fetchDataFn={() => fetchTMDB(lang, '/movie/top_rated', 'movie')}
        lang={lang}
        title={dict.app.browse.sections.movies.topRated}
      />
      <Section
        fetchDataFn={() => fetchTMDB(lang, '/movie/upcoming', 'movie')}
        lang={lang}
        title={dict.app.browse.sections.movies.upcoming}
      />

      {genres?.map(({ id, name }) => (
        <Section
          key={id}
          fetchDataFn={() => getByGenre('movie', lang, id)}
          lang={lang}
          title={name}
        />
      ))}
    </>
  );
};

export default SeriesPage;
