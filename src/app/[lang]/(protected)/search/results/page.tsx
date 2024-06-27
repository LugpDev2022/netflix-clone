import { redirect } from 'next/navigation';

import ResultCard from '../components/ResultCard';
import { getMoviesByName } from '@/src/app/[lang]/(protected)/lib/getMoviesByName';
import { getSeriesByName } from '@/src/app/[lang]/(protected)/lib/getSeriesByName';
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

          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-2.5'>
            {movies.map(({ id, backdrop_path, release_date, title }) => (
              <ResultCard
                key={id}
                id={id}
                image={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                lang={lang}
                releaseYear={new Date(release_date).getFullYear().toString()}
                title={title}
                type='movies'
              />
            ))}
          </div>
        </>
      )}

      {series.length < 1 ? (
        <></>
      ) : (
        <>
          <h2 className='category-subtitle mt-6'>
            {dict.app.searchPage.resultsPage.series}
          </h2>

          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-2.5'>
            {series.map(({ id, backdrop_path, release_date, title }) => (
              <ResultCard
                key={id}
                id={id}
                image={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                lang={lang}
                releaseYear={new Date(release_date).getFullYear().toString()}
                title={title}
                type='series'
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ResultsPage;
