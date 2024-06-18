import Image from 'next/image';
import Link from 'next/link';

import { HiMagnifyingGlass } from 'react-icons/hi2';

const Navbar = () => {
  return (
    <header>
      <Image src='/logo.svg' alt='Netflix' width={89} height={24} />

      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/series'>Series</Link>
          </li>
          <li>
            <Link href='/movies'>Movies</Link>
          </li>
        </ul>
      </nav>

      <div>
        <Link href='/search'>
          <HiMagnifyingGlass />
        </Link>
        <Image src='/avatar.png' alt='Avatar' width={50} height={50} />
      </div>
    </header>
  );
};

export default Navbar;
