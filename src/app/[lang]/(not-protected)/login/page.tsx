import Image from 'next/image';
import Link from 'next/link';

import SignInForm from '@/src/app/[lang]/(not-protected)/login/components/SignInForm';
import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';
import './login.css';

interface Props {
  params: {
    lang: Locale;
  };
}

const LoginPage: React.FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <div className='login-bg text-white'>
      <div className='bg-gradient-to-b from-black/80 via-black/50 to-black/80 min-h-screen'>
        <header className='p-6'>
          <Image
            src='/logo.svg'
            width={148}
            height={40}
            alt='Netflix'
            className='w-[89px] h-6 md:w-[148px] md:h-10'
          />
        </header>

        <main className='login-main'>
          <h1 className='text-[32px] font-bold'>{dict.login.title}</h1>

          <SignInForm lang={lang} dict={dict} />

          <p className='text-[#ffffffb3] mt-4'>
            {dict.login.new}{' '}
            <Link href='/signup' className='text-white'>
              {dict.login.newLink}
            </Link>
          </p>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;
