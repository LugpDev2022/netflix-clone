import ResultCard from '@/src/app/[lang]/(protected)/search/components/ResultCard';

interface Props {
  series: [];
}

const SeriesList: React.FC<Props> = ({ series }) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-2.5'>
      {series.map((result: any) => {
        const { id, name, backdrop_path, first_air_date } = result;

        const img = `https://image.tmdb.org/t/p/original${backdrop_path}`;

        const year = new Date(first_air_date).getFullYear().toString();

        if (!backdrop_path) return <></>;

        return (
          <ResultCard key={id} image={img} releaseYear={year} title={name} />
        );
      })}
    </div>
  );
};

export default SeriesList;
