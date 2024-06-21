import { Locale } from '@/src/types';
import { getPopularMovies } from './lib/getPopularMovies';
import { getPopularSeries } from './lib/getPopularSeries';

interface Props {
  params: {
    lang: Locale;
  };
}

const SearchPage: React.FC<Props> = async ({ params: { lang } }) => {
  const [moviesErr, movies] = await getPopularMovies(lang);
  const [seriesErr, series] = await getPopularSeries(lang);
  console.log(series);

  return (
    <>
      <h2 className='category-subtitle'>Popular movies</h2>
      {movies?.map((movie: any) => (
        <div key={movie.id}>{movie.title}</div>
      ))}

      <h2 className='category-subtitle'>Popular Series</h2>

      {series?.map((show: any) => (
        <div key={show.id}>{show.name}</div>
      ))}
    </>
  );
};

export default SearchPage;
