import { Locale } from '@/src/types';
import { getPopularMovies } from './lib/getPopularMovies';
import { getPopularSeries } from './lib/getPopularSeries';
import Card from './components/Card';
import { getDictionary } from '../../dictionaries';
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
        {movies?.map((movie: any) => (
          <Card
            alt={movie.name}
            href={`/${lang}/series/${movie.id}`}
            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            key={movie.id}
          />
        ))}
      </div>

      <h2 className='category-subtitle mt-6'>
        {dict.app.searchPage.popularSeries}
      </h2>
      <div className='posters-grid'>
        {series?.map((show: any) => (
          <Card
            alt={show.name}
            href={`/${lang}/series/${show.id}`}
            image={`https://image.tmdb.org/t/p/original${show.poster_path}`}
            key={show.id}
          />
        ))}
      </div>
    </>
  );
};

export default SearchPage;
