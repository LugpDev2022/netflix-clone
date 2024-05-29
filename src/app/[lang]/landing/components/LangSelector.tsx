'use client';

import { ChangeEventHandler } from 'react';

import { Locale } from '@/src/types';

interface Props {
  lang: Locale;
}

const LangSelector: React.FC<Props> = ({ lang }) => {
  const handleLangChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    event.preventDefault();
    console.log('change');
  };

  return (
    <select
      className='bg-transparent py-1.5 px-9 appearance-none w-0.5 sm:w-auto'
      onChange={handleLangChange}
    >
      <option className='bg-black' selected={lang === 'en'}>
        English
      </option>
      <option className='bg-black' selected={lang === 'es'}>
        Español
      </option>
    </select>
  );
};

export default LangSelector;
