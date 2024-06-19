import { redirect } from 'next/navigation';

interface Props {
  searchParams: {
    q: string;
  };
}

const ResultsPage: React.FC<Props> = ({ searchParams: { q: query } }) => {
  if (!query) return redirect('/search');

  console.log(query);

  return <div>ResultsPage</div>;
};

export default ResultsPage;
