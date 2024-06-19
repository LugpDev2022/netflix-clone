'use client';

import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { RxCross1 } from 'react-icons/rx';

//TODO:Update color scheme
const SearchBar = () => {
  const [state, setState] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  useEffect(() => {
    if (state.length < 1) return router.push(pathname);

    router.push(`${pathname}?q=${state}`);
  }, [state, pathname, router]);

  return (
    <div className='w-full relative text-white mt-2.5'>
      <label htmlFor='' className='absolute top-1/2 -translate-y-1/2 left-6'>
        <HiMagnifyingGlass size={24} />
      </label>
      <input
        type='text'
        className='w-full h-14 bg-white/70 rounded-md pl-[56px] pe-[52px] outline-none'
        placeholder='Find movies and series'
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
