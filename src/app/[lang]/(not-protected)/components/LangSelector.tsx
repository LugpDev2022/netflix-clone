'use client';

import { ChangeEventHandler } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { MdOutlineTranslate, MdArrowDropDown } from 'react-icons/md';

import { Locale } from '@/src/types';

interface Props {
  lang: Locale;
  theme: 'light' | 'dark';
}

const LangSelector: React.FC<Props> = ({ lang, theme }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLangChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    event.preventDefault();
    const { value } = event.target;

    if (lang === value) return;

    const newPathname = pathname.replace(lang, value);
    router.push(newPathname);
  };

  return (
    <>
      <div
        className={`
            ${
              theme === 'light'
                ? 'bg-white text-[#737373] border-[#a6a6a6]'
                : 'bg-black/80 text-white/70 border-white/40'
            }
            border-[0.2px]
            
            rounded-md
            text-base
            relative
            inline-block
        `}
      >
        <MdOutlineTranslate
          className='absolute top-1/2 left-3 transform -translate-y-1/2'
          size={18}
        />

        <select
          className='bg-transparent py-1 px-8 appearance-none w-0.5 sm:w-auto sm:px-9'
          onChange={handleLangChange}
          defaultValue={lang}
        >
          <option
            className={theme === 'light' ? 'bg-white' : 'bg-black/80'}
            value='en'
          >
            English
          </option>
          <option
            className={theme === 'light' ? 'bg-white' : 'bg-black/80'}
            value='es'
          >
            Español
          </option>
        </select>

        <MdArrowDropDown
          className='absolute top-1/2 right-1 transform -translate-y-1/2'
          size={28}
        />
      </div>
    </>
  );
};

export default LangSelector;
