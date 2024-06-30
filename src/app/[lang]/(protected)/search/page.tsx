import PosterCard from '@/src/app/[lang]/(protected)/components/PosterCard';
import { getAllPopular } from '@/src/app/[lang]/(protected)/lib/getAllPopular';
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

  const [err, results] = await getAllPopular(lang);

  if (err) return <p>{dict.error}</p>;

  return (
    <>
      <div className='posters-grid'>
        {results?.map(({ title, id, poster_path, type }) => (
          <PosterCard
            alt={title}
            href={`/${lang}/${type}/${id}`}
            posterPath={poster_path}
            key={id}
          />
        ))}
      </div>
    </>
  );
};

export default SearchPage;
