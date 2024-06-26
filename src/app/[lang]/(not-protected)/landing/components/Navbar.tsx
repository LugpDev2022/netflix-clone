import Image from 'next/image';

import LangSelector from '@/src/app/[lang]/components/LangSelector';
import { Locale } from '@/src/types';
import { getDictionary } from '../../../dictionaries';
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
          width={89}
          height={24}
          className='w-[89px] lg:w-[148px]'
          alt='Netflix'
        />
      </span>

      <div className='flex items-center gap-2 md:gap-6'>
        <LangSelector lang={lang} theme='dark' />
        <SignInLink lang={lang}>{dict.landing.signIn}</SignInLink>
      </div>
    </header>
  );
};

export default Navbar;
