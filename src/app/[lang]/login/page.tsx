import Image from 'next/image';
import Link from 'next/link';

import SignInForm from '@/src/app/[lang]/login/components/SignInForm';
import './login.css';

const LoginPage = () => {
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
          <h1 className='text-[32px] font-bold'>Sign In</h1>

          <SignInForm />

          <p className='text-[#ffffffb3] mt-4'>
            New to Netflix?{' '}
            <Link href='/signup' className='text-white'>
              Sign up now.
            </Link>
          </p>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;
