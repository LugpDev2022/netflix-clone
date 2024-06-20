import { redirect } from 'next/navigation';

import ResultCard from '../components/ResultCard';
import { Locale } from '@/src/types';
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

  //TODO: Fetch series
  const resp = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=${lang}&query=${query}`
  );

  const data = await resp.json();

  const { results } = data;

  //TODO: Improve the not found message
  if (results.length < 1) return <h1>Not found</h1>;

  return (
    <main className='grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-2.5'>
      {results.map((result: any) => {
        const { id, title, backdrop_path, release_date } = result;

        const img = `https://image.tmdb.org/t/p/original${backdrop_path}`;

        const year = new Date(release_date).getFullYear().toString();

        if (!backdrop_path) return <></>;

        return (
          <ResultCard key={id} image={img} releaseYear={year} title={title} />
        );
      })}
    </main>
  );
};

export default ResultsPage;
