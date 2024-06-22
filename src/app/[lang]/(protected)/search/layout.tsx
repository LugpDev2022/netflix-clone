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
    <div className='pt-[115px] sm:pt-[74px] px-4 md:px-10'>
      <Suspense>
        <SearchBar dict={dict} lang={lang} />
      </Suspense>
      <main className='mt-6 pb-5'>{children}</main>
    </div>
  );
};

export default SearchLayout;
