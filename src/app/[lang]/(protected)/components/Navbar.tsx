'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HiMagnifyingGlass } from 'react-icons/hi2';

import AvatarDropdown from './AvatarDropdown';
import { Locale } from '@/src/types';

interface Props {
  lang: Locale;
  dict: any;
}

const Navbar: React.FC<Props> = ({ lang, dict }) => {
  const TRANSPARENCY_BREAK_POINT = 100;

  const pathname = usePathname();
  const [isTransparent, setIsTransparent] = useState(true);

  const changeTransparencyOnScroll = () => {
    setIsTransparent(window.scrollY < TRANSPARENCY_BREAK_POINT);
  };

  useEffect(() => {
    changeTransparencyOnScroll();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeTransparencyOnScroll);

    return () => {
      window.removeEventListener('scroll', changeTransparencyOnScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isTransparent ? 'bg-transparent' : 'bg-black/80'
      } grid grid-cols-2 p-5 items-center  text-white/80 fixed w-full sm:flex sm:justify-between transition`}
    >
      <Link href={`/${lang}`}>
        <Image src='/logo.svg' alt='Netflix' width={125} height={34} />
      </Link>

      <nav className='col-span-2 order-2 mt-5 sm:order-1 sm:mt-0'>
        <ul className='flex justify-center gap-7 font-semibold'>
          <li
            className={
              pathname === '/en' || pathname === '/es'
                ? 'nav-item-active'
                : 'nav-item'
            }
          >
            <Link href={`/${lang}`}>{dict.app.navbar.navigation.home}</Link>
          </li>
          <li
            className={
              pathname.includes('/series') ? 'nav-item-active' : 'nav-item'
            }
          >
            <Link href={`/${lang}/series`}>
              {dict.app.navbar.navigation.series}
            </Link>
          </li>
          <li
            className={
              pathname.includes('/movies') ? 'nav-item-active' : 'nav-item'
            }
          >
            <Link href={`/${lang}/movies`}>
              {dict.app.navbar.navigation.movies}
            </Link>
          </li>
        </ul>
      </nav>

      <div className='flex gap-5 justify-end order-1 sm:order-2'>
        <Link href={`/${lang}/search`}>
          <HiMagnifyingGlass size={26} />
        </Link>
        <AvatarDropdown dict={dict} />
      </div>
    </header>
  );
};

export default Navbar;
