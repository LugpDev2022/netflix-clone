import Link from 'next/link';
import Image from 'next/image';

import LangSelector from '@/src/app/[lang]/landing/components/LangSelector';
import { Locale } from '@/src/types';
import { getDictionary } from '../../dictionaries';
import SignInLink from './SignInLink';

interface Props {
  lang: Locale;
}

const Navbar: React.FC<Props> = async ({ lang }) => {
  const dict = await getDictionary(lang);

  return (
    <header
      className='
          flex
          flex-row
          flex-wrap
          gap-2
          items-center
          justify-between
          py-6
          w-full
        '
    >
      <span className='shrink-0'>
        <Image
          src='/logo.svg'
          width={96}
          height={26}
          className='w-24 md:w-36'
          alt='Netflix'
        />
      </span>

      <div className='flex items-center gap-2 md:gap-6'>
        <div
          className='
              bg-black/80
              border-[0.2px]
              border-white/40
              rounded-md
              text-base
              relative
            '
        >
          <Image
            src='/translate.png'
            className='h-4 absolute top-1/2 left-3 transform -translate-y-1/2'
            alt='Translate'
            width={16}
            height={16}
          />

          <LangSelector lang={lang} />

          <Image
            src='/arrow.svg'
            className='h-2 absolute top-1/2 right-3 transform -translate-y-1/2'
            alt='Arrow'
            width={8}
            height={8}
          />
        </div>

        <SignInLink>{dict.landing.signIn}</SignInLink>
      </div>
    </header>
  );
};

export default Navbar;
