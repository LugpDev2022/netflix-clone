import {
  FaGithub,
  FaLinkedin,
  FaSquareXTwitter,
  FaLink,
} from 'react-icons/fa6';

import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';

interface Props {
  lang: Locale;
}

const Footer: React.FC<Props> = async ({ lang }) => {
  const dict = await getDictionary(lang);

  return (
    <footer className='bg-black text-left py-3'>
      <div className='max-w-screen-lg mx-auto'>
        <h4>Important Information</h4>
        <p>
          This website is not the official Netflix site. It was created by Luis
          Cervantes for programming practice.
        </p>

        <h4>Contact</h4>
        <ul>
          <li>
            <FaGithub />
            <a
              href='https://github.com/LugpDev2022'
              target='_blank'
              rel='noopener noreferrer'
            >
              @LugpDev2022
            </a>
          </li>
          <li>
            <FaLinkedin />
            <a
              href='https://www.linkedin.com/in/luiscerv/'
              target='_blank'
              rel='noopener noreferrer'
            >
              in/luiscerv
            </a>
          </li>
          <li>
            <FaSquareXTwitter />
            <a
              href='https://twitter.com/LugpDev2022'
              target='_blank'
              rel='noopener noreferrer'
            >
              @LugpDev2022
            </a>
          </li>
          <li>
            <FaLink />
            <a
              href='https://luiscerv.tech/'
              target='_blank'
              rel='noopener noreferrer'
            >
              luiscerv.tech
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
