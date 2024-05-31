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
  // TODO: Add translations
  const dict = await getDictionary(lang);

  return (
    <footer className='landing-footer-container'>
      <div className='max-w-screen-lg mx-auto'>
        <h4 className='landing-footer-subtitle'>Important Information</h4>
        <p className='text-pretty'>
          This website is not the official Netflix site. It was created by Luis
          Cervantes for programming practice.
        </p>

        <h4 className='landing-footer-subtitle mt-6'>Contact Links</h4>
        <ul className='mt-4 grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-4 gap-4'>
          <li className='landing-contact-list-item'>
            <FaGithub />
            <a
              href='https://github.com/LugpDev2022'
              target='_blank'
              rel='noopener noreferrer'
            >
              @LugpDev2022
            </a>
          </li>
          <li className='landing-contact-list-item'>
            <FaLinkedin />
            <a
              href='https://www.linkedin.com/in/luiscerv/'
              target='_blank'
              rel='noopener noreferrer'
            >
              in/luiscerv
            </a>
          </li>
          <li className='landing-contact-list-item'>
            <FaSquareXTwitter />
            <a
              href='https://twitter.com/LugpDev2022'
              target='_blank'
              rel='noopener noreferrer'
            >
              @LugpDev2022
            </a>
          </li>
          <li className='landing-contact-list-item'>
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
