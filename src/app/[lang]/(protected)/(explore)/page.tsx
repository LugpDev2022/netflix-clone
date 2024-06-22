import { Locale } from '@/src/types';

interface Props {
  params: {
    lang: Locale;
  };
}

const HomePage: React.FC<Props> = ({ params: { lang } }) => {
  return (
    <>
      <h1>Clonflix 2</h1>
    </>
  );
};

export default HomePage;
