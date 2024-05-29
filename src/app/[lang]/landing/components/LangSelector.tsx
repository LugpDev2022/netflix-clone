'use client';

import { ChangeEventHandler } from 'react';

import { Locale } from '@/src/types';
import { useRouter } from 'next/navigation';

interface Props {
  lang: Locale;
}

const LangSelector: React.FC<Props> = ({ lang }) => {
  const router = useRouter();

  const handleLangChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    event.preventDefault();

    const { value } = event.target;

    if (lang === value) return;

    router.push(`/${value}/landing`);
  };

  return (
    <select
      className='bg-transparent py-1.5 px-9 appearance-none w-0.5 sm:w-auto'
      onChange={handleLangChange}
      defaultValue={lang}
    >
      <option className='bg-black' value='en'>
        English
      </option>
      <option className='bg-black' value='es'>
        Español
      </option>
    </select>
  );
};

export default LangSelector;
