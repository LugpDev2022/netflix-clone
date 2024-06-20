import { redirect } from 'next/navigation';

import MoviesList from './components/MoviesList';
import { getMoviesByName } from './lib/getMoviesByName';
import { getSeriesByName } from './lib/getSeriesByName';
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

  //TODO: Fetch series

  const [moviesErr, movies] = await getMoviesByName(query, lang);
  const [seriesErr, series] = await getSeriesByName(query, lang);

  //TODO: Improve the error message
  if (moviesErr) return <h1>Unexpected error</h1>;

  //TODO: Improve the not found message
  if (!movies || movies.length < 1) return <h1>Not found</h1>;

  return (
    <main>
      <h2>Movies</h2>
      <MoviesList movies={movies} />
    </main>
  );
};

export default ResultsPage;
