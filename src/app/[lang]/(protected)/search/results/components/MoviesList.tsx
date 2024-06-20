import ResultCard from '@/src/app/[lang]/(protected)/search/components/ResultCard';

interface Props {
  movies: [];
}

const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-2.5'>
      {movies.map((result: any) => {
        const { id, title, backdrop_path, release_date } = result;

        const img = `https://image.tmdb.org/t/p/original${backdrop_path}`;

        const year = new Date(release_date).getFullYear().toString();

        if (!backdrop_path) return <></>;

        return (
          <ResultCard
            key={id}
            image={img}
            releaseYear={year}
            title={title}
            type='movies'
            id={id}
          />
        );
      })}
    </div>
  );
};

export default MoviesList;
