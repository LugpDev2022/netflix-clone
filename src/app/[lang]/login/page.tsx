import Image from 'next/image';
import Link from 'next/link';

import SignInForm from '@/src/app/[lang]/login/components/SignInForm';
import './login.css';

const LoginPage = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
      <header className='p-6'>
        <Image
          src='/logo.svg'
          width={148}
          height={40}
          alt='Netflix'
          className='w-[89px] h-6'
        />
      </header>

      <main className='px-6'>
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
  );
};

export default LoginPage;
