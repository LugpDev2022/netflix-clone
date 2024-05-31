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
    <footer className='landing-footer-container'>
      <div className='max-w-screen-lg mx-auto'>
        <h4 className='landing-footer-subtitle'>
          {dict.landing.footer.subtitle1}
        </h4>
        <p className='text-pretty'>{dict.landing.footer.information}</p>

        <h4 className='landing-footer-subtitle mt-6'>
          {dict.landing.footer.subtitle2}
        </h4>
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
              href={`https://www.linkedin.com/in/luiscerv${
                lang === 'en' ? '/en' : '/'
              }`}
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
              href={`https://luiscerv.tech${lang === 'en' ? '/' : '/es'}`}
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
