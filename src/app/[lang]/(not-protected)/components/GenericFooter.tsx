import {
  FaGithub,
  FaLinkedin,
  FaSquareXTwitter,
  FaLink,
} from 'react-icons/fa6';

import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';
import LangSelector from './LangSelector';

interface Props {
  lang: Locale;
  className?: string;
  theme: 'light' | 'dark';
}

const GenericFooter: React.FC<Props> = async ({ lang, theme }) => {
  const dict = await getDictionary(lang);

  return (
    <footer
      className={
        theme === 'light' ? 'footer-container-light' : 'footer-container-dark'
      }
    >
      <div>
        <h4 className='footer-subtitle'>{dict.genericFooter.subtitle1}</h4>
        <p className='text-pretty'>{dict.genericFooter.information}</p>

        <h4 className='footer-subtitle'>{dict.genericFooter.subtitle2}</h4>
        <ul className='mt-4 grid grid-cols-1 justify-center gap-5 sm:gap-4 sm:grid-cols-2 md:grid-cols-4'>
          <li className='footer-contact-list-item'>
            <a
              href='https://github.com/LugpDev2022'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub size={24} />
              <span>@LugpDev2022</span>
            </a>
          </li>
          <li className='footer-contact-list-item'>
            <a
              href={`https://www.linkedin.com/in/luiscerv${
                lang === 'en' ? '/en' : '/'
              }`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin size={24} />
              <span>in/luiscerv</span>
            </a>
          </li>
          <li className='footer-contact-list-item'>
            <a
              href='https://twitter.com/LugpDev2022'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'
            >
              <FaSquareXTwitter size={24} />
              <span>@LugpDev2022</span>
            </a>
          </li>
          <li className='footer-contact-list-item'>
            <a
              href={`https://luiscerv.tech${lang === 'en' ? '/' : '/es'}`}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'
            >
              <FaLink size={24} />
              <span>luiscerv.tech</span>
            </a>
          </li>
        </ul>

        <div className='mt-6'>
          <h4 className='footer-subtitle'>{dict.genericFooter.subtitle3}</h4>
          <LangSelector lang={lang} theme={theme} />
        </div>
      </div>
    </footer>
  );
};

export default GenericFooter;
