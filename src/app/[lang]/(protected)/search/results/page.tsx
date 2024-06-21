import { redirect } from 'next/navigation';

import MoviesList from '@/src/app/[lang]/(protected)/search/results/components/MoviesList';
import SeriesList from '@/src/app/[lang]/(protected)/search/results/components/SeriesList';
import { getMoviesByName } from '@/src/app/[lang]/(protected)/search/results/lib/getMoviesByName';
import { getSeriesByName } from '@/src/app/[lang]/(protected)/search/results/lib/getSeriesByName';
import { getDictionary } from '@/src/app/[lang]/dictionaries';
import type { Locale } from '@/src/types';
import './results.css';

interface Props {
  searchParams: {
    q: string;
  };
  params: {
    lang: Locale;
  };
}

const ResultsPage: React.FC<Props> = async ({
  params: { lang },
  searchParams: { q: query },
}) => {
  if (!query) return redirect(`/${lang}/search`);

  const dict = await getDictionary(lang);

  const [moviesErr, movies] = await getMoviesByName(query, lang);
  const [seriesErr, series] = await getSeriesByName(query, lang);

  if (moviesErr || seriesErr || !series || !movies)
    return <p>{dict.app.searchPage.resultsPage.error}</p>;

  if (movies.length < 1 && series.length < 1)
    return <p>{dict.app.searchPage.resultsPage.notFound}</p>;

  return (
    <>
      {movies.length < 1 ? (
        <></>
      ) : (
        <>
          <h2 className='category-subtitle'>
            {dict.app.searchPage.resultsPage.movies}
          </h2>
          <MoviesList movies={movies} lang={lang} />
        </>
      )}

      {series.length < 1 ? (
        <></>
      ) : (
        <>
          <h2 className='category-subtitle mt-6'>
            {dict.app.searchPage.resultsPage.series}
          </h2>
          <SeriesList series={series} lang={lang} />
        </>
      )}
    </>
  );
};

export default ResultsPage;
