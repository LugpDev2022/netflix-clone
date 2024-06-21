import { Locale } from '@/src/types';

interface Props {
  params: {
    lang: Locale;
  };
}

const SearchPage: React.FC<Props> = async ({ params: { lang } }) => {
  console.log(lang);

  return (
    <>
      <h2 className='category-subtitle'>Popular</h2>
    </>
  );
};

export default SearchPage;
