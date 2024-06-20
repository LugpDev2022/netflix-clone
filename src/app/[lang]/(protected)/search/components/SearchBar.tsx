'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import { HiMagnifyingGlass } from 'react-icons/hi2';
import { RxCross1 } from 'react-icons/rx';

import { Locale } from '@/src/types';

interface Props {
  lang: Locale;
  dict: any;
}

//TODO:Update color scheme
const SearchBar: React.FC<Props> = ({ lang, dict }) => {
  const [state, setState] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  useEffect(() => {
    const query = searchParams.get('q');

    if (!query) return;

    setState(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state.length < 1) return router.push(`/${lang}/search`);

    router.push(`/${lang}/search/results?q=${state}`);
  }, [state, pathname, router, lang]);

  return (
    <div className='w-full relative text-white mt-2.5'>
      <label
        htmlFor='searchbox'
        className='absolute top-1/2 -translate-y-1/2 left-6'
      >
        <HiMagnifyingGlass size={24} />
      </label>
      <input
        type='text'
        className='w-full h-14 bg-white/70 rounded-md pl-[56px] pe-[52px] outline-none'
        placeholder={dict.app.searchPage.searchBar.placeholder}
        id='searchbox'
        value={state}
        onChange={handleChange}
      />

      {state.length > 0 ? (
        <button
          type='reset'
          className='absolute top-1/2 -translate-y-1/2 right-6'
          onClick={() => setState('')}
        >
          <RxCross1 size={20} />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchBar;
