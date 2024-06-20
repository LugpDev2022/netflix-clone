import { redirect } from 'next/navigation';

import MoviesList from '@/src/app/[lang]/(protected)/search/results/components/MoviesList';
import SeriesList from '@/src/app/[lang]/(protected)/search/results/components/SeriesList';
import { getMoviesByName } from '@/src/app/[lang]/(protected)/search/results/lib/getMoviesByName';
import { getSeriesByName } from '@/src/app/[lang]/(protected)/search/results/lib/getSeriesByName';
import { Locale } from '@/src/types';
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

  const [moviesErr, movies] = await getMoviesByName(query, lang);
  const [seriesErr, series] = await getSeriesByName(query, lang);

  //TODO: Improve the error message
  if (moviesErr || seriesErr || !series || !movies)
    return <h1>Unexpected error</h1>;

  //TODO: Improve the not found message
  if (movies.length < 1 && series.length < 1) return <h1>Not found</h1>;

  return (
    <main>
      {movies.length < 1 ? (
        <></>
      ) : (
        <>
          <h2 className='mb-2 text-xl font-bold'>Movies</h2>
          <MoviesList movies={movies} />
        </>
      )}

      {series.length < 1 ? (
        <></>
      ) : (
        <>
          <h2 className='mt-5 mb-2 text-xl font-bold'>Series</h2>
          <SeriesList series={series} />
        </>
      )}
    </main>
  );
};

export default ResultsPage;
