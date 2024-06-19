import { Locale } from '@/src/types';
import { redirect } from 'next/navigation';

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
  if (!query) return redirect('/search');

  const resp = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=${lang}&query=${query}`
  );

  const data = await resp.json();

  const { results } = data;

  return (
    <div>
      {results.map(({ key, title }: any) => (
        // TODO: Create a card
        <div key={key}>{title}</div>
      ))}
    </div>
  );
};

export default ResultsPage;
