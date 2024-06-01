import { Locale } from '@/src/types';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  lang: Locale;
}

const Navbar: React.FC<Props> = ({ lang }) => {
  return (
    <header className='p-4 border-b border-[#e6e6e6]'>
      <Link href={`/${lang}/landing`}>
        <Image
          src='/logo.svg'
          width={89}
          height={24}
          className='w-[89px] sm:w-[148px]'
          alt='Netflix'
        />
      </Link>
    </header>
  );
};

export default Navbar;
