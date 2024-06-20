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
      <div className='mt-6'>{children}</div>
    </>
  );
};

export default SearchLayout;
