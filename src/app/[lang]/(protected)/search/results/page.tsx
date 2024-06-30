import { redirect } from 'next/navigation';

import ResultCard from '../components/ResultCard';
import { searchByName } from '@/src/app/[lang]/(protected)/search/results/lib/searchByName';
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

  const [err, results] = await searchByName(query, lang);

  if (err) return <p>{dict.app.searchPage.resultsPage.error}</p>;

  if (!results || results?.length < 1)
    return <p>{dict.app.searchPage.resultsPage.notFound}</p>;

  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-2.5'>
        {results.map(({ id, backdrop_path, release_date, title, type }) => (
          <ResultCard
            key={id}
            id={id}
            image={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            lang={lang}
            releaseYear={new Date(release_date).getFullYear().toString()}
            title={title}
            type={type}
          />
        ))}
      </div>
    </>
  );
};

export default ResultsPage;
