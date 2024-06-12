import Link from 'next/link';
import { Locale } from '@/src/types';

interface Props {
  children: React.ReactNode;
  lang: Locale;
}

const SignInLink: React.FC<Props> = ({ children, lang }) => {
  return (
    <Link
      href={`/${lang}/login`}
      className='
        bg-red-600
        hover:bg-red-700
        px-3 
        py-1.5
        rounded-md
        text-sm
        tracking-wider
        transition
        duration-200
        font-medium
      '
    >
      {children}
    </Link>
  );
};

export default SignInLink;
