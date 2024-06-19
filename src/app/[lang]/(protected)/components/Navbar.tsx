'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HiMagnifyingGlass } from 'react-icons/hi2';

const Navbar = () => {
  const TRANSPARENCY_BREAK_POINT = 100;

  const pathname = usePathname();
  const [isTransparent, setIsTransparent] = useState(
    window.scrollY < TRANSPARENCY_BREAK_POINT
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY < TRANSPARENCY_BREAK_POINT);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isTransparent ? 'bg-transparent' : 'bg-black/80'
      } grid grid-cols-2 p-5 items-center  text-white/80 fixed w-full sm:flex sm:justify-between transition`}
    >
      <Image src='/logo.svg' alt='Netflix' width={125} height={34} />

      <nav className='col-span-2 order-2 mt-5 sm:order-1 sm:mt-0'>
        <ul className='flex justify-center gap-7 font-semibold'>
          <li
            className={
              pathname === '/en' || pathname === '/es'
                ? 'nav-item-active'
                : 'nav-item'
            }
          >
            <Link href='/'>Home</Link>
          </li>
          <li
            className={
              pathname.includes('/series') ? 'nav-item-active' : 'nav-item'
            }
          >
            <Link href='/series'>Series</Link>
          </li>
          <li
            className={
              pathname.includes('/movies') ? 'nav-item-active' : 'nav-item'
            }
          >
            <Link href='/movies'>Movies</Link>
          </li>
        </ul>
      </nav>

      <div className='flex gap-5 justify-end order-1 sm:order-2'>
        <Link href='/search'>
          <HiMagnifyingGlass size={26} />
        </Link>
        <Image src='/avatar.png' alt='Avatar' width={26} height={26} />
      </div>
    </header>
  );
};

export default Navbar;
