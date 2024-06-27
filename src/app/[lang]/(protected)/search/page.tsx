import PosterCard from '@/src/app/[lang]/(protected)/components/PosterCard';
import { getPopularMovies } from '@/src/app/[lang]/(protected)/lib/getPopularMovies';
import { getPopularSeries } from '@/src/app/[lang]/(protected)/lib/getPopularSeries';
import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';
import './search.css';

interface Props {
  params: {
    lang: Locale;
  };
}

const SearchPage: React.FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  const [moviesErr, movies] = await getPopularMovies(lang);
  const [seriesErr, series] = await getPopularSeries(lang);

  if (moviesErr || seriesErr) return <p>{dict.error}</p>;

  return (
    <>
      <h2 className='category-subtitle'>{dict.app.searchPage.popularMovies}</h2>
      <div className='posters-grid'>
        {movies?.map((movie) => (
          <PosterCard
            alt={movie.title}
            href={`/${lang}/movies/${movie.id}`}
            posterPath={movie.poster_path}
            key={movie.id}
          />
        ))}
      </div>

      <h2 className='category-subtitle mt-6'>
        {dict.app.searchPage.popularSeries}
      </h2>
      <div className='posters-grid'>
        {series?.map((show) => (
          <PosterCard
            alt={show.title}
            href={`/${lang}/series/${show.id}`}
            posterPath={show.poster_path}
            key={show.id}
          />
        ))}
      </div>
    </>
  );
};

export default SearchPage;
