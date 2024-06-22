import ResultCard from '@/src/app/[lang]/(protected)/search/components/ResultCard';
import { Locale } from '@/src/types';

interface Props {
  series: [];
  lang: Locale;
}

const SeriesList: React.FC<Props> = ({ series, lang }) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-2.5'>
      {series.map((result: any) => {
        const { id, name, backdrop_path, first_air_date } = result;

        const img = `https://image.tmdb.org/t/p/original${backdrop_path}`;

        const year = new Date(first_air_date).getFullYear().toString();

        if (!backdrop_path) return <></>;

        return (
          <ResultCard
            key={id}
            id={id}
            image={img}
            releaseYear={year}
            title={name}
            type='series'
            lang={lang}
          />
        );
      })}
    </div>
  );
};

export default SeriesList;
