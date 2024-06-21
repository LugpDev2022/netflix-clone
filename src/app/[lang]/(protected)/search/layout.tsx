import { Suspense } from 'react';

import SearchBar from './components/SearchBar';
import { Locale } from '@/src/types';
import { getDictionary } from '../../dictionaries';

interface Props {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

const SearchLayout: React.FC<Props> = async ({
  children,
  params: { lang },
}) => {
  const dict = await getDictionary(lang);

  return (
    <>
      <Suspense>
        <SearchBar dict={dict} lang={lang} />
      </Suspense>
      <main className='mt-6 pb-5'>{children}</main>
    </>
  );
};

export default SearchLayout;
