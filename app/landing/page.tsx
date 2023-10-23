import styles from './landing.module.css';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <main className={`${styles.background} relative`}>
      <header
        className='
          bg-gradient-to-b
          from-black/90
          fixed
          flex
          flex-row
          flex-wrap
          gap-2
          items-center
          justify-between
          left-0
          lg:px-40
          md:px-20
          p-6
          sm:px-10
          top-0 
          w-full
        '
      >
        <span className='shrink-0'>
          <img src='/logo.svg' className='w-24 md:w-36' alt='Netflix' />
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
            <img
              src='/translate.png'
              className='h-4 absolute top-1/2 left-3 transform -translate-y-1/2'
              alt='Translate'
            />
            <select className='bg-transparent py-1.5 px-9 appearance-none'>
              <option className='bg-black'>English</option>
              <option className='bg-black'>Español</option>
            </select>

            <img
              src='/arrow.svg'
              className='h-2 absolute top-1/2 right-3 transform -translate-y-1/2'
              alt='Translate'
            />
          </div>

          <Link
            href='/login'
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
            '
          >
            Sign In
          </Link>
        </div>
      </header>

      <div className='h-full w-full pt-20 bg-black/50'></div>
    </main>
  );
};

export default LoginPage;
