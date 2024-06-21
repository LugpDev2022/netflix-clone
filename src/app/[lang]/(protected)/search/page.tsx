import { Locale } from '@/src/types';
import { getPopularMovies } from './lib/getPopularMovies';
import { getPopularSeries } from './lib/getPopularSeries';
import Card from './components/Card';
import './search.css';

interface Props {
  params: {
    lang: Locale;
  };
}

const SearchPage: React.FC<Props> = async ({ params: { lang } }) => {
  const [moviesErr, movies] = await getPopularMovies(lang);
  const [seriesErr, series] = await getPopularSeries(lang);

  return (
    <>
      <h2 className='category-subtitle'>Popular movies</h2>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5  gap-2 lg:gap-2.5'>
        {movies?.map((movie: any) => (
          <Card
            alt={movie.name}
            href={`/${lang}/series/${movie.id}`}
            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            key={movie.id}
          />
        ))}
      </div>

      <h2 className='category-subtitle'>Popular Series</h2>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5  gap-2 lg:gap-2.5'>
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
