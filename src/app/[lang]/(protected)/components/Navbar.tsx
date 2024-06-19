import Image from 'next/image';
import Link from 'next/link';

import { HiMagnifyingGlass } from 'react-icons/hi2';

const Navbar = () => {
  return (
    <header className='grid grid-cols-2 p-5 items-center bg-black text-white/80 fixed w-full sm:flex sm:justify-between'>
      <Image src='/logo.svg' alt='Netflix' width={125} height={34} />

      <nav className='col-span-2 order-2 mt-5 sm:order-1 sm:mt-0'>
        <ul className='flex justify-center gap-7 font-semibold'>
          <li className='nav-item-active'>
            <Link href='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link href='/series'>Series</Link>
          </li>
          <li className='nav-item'>
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
