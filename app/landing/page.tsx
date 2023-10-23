import styles from './login.module.css';
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
          <select className='bg-black/80 border-white/40 border-[0.2px] rounded-md px-3 text-base py-1.5'>
            {/* <Image
              src='/translate.png'
              width={50}
              height={50}
              alt='Translate'
            /> */}
            <option>English</option>
            <option>Español</option>
          </select>
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
