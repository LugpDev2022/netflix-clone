import { Locale } from '@/src/types';
import { getPopularMovies } from './lib/getPopularMovies';

interface Props {
  params: {
    lang: Locale;
  };
}

const SearchPage: React.FC<Props> = async ({ params: { lang } }) => {
  const [moviesErr, movies] = await getPopularMovies(lang);

  return (
    <>
      <h2 className='category-subtitle'>Popular</h2>
      {movies?.map((movie: any) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </>
  );
};

export default SearchPage;
