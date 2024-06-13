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
  className?: string;
  theme: 'light' | 'dark';
}

const GenericFooter: React.FC<Props> = async ({
  lang,
  theme,
  className = '',
}) => {
  const dict = await getDictionary(lang);

  return (
    <footer
      className={` ${
        theme === 'light'
          ? 'bg-[#f3f3f3] text-[#737373] border-t border-[#e6e6e6]'
          : 'bg-black text-white/70'
      }`}
    >
      {/* TODO: Set custom max width */}
      <div>
        <h4 className=''>{dict.landing.footer.subtitle1}</h4>
        <p className='text-pretty'>{dict.landing.footer.information}</p>

        <h4 className='mt-6'>{dict.landing.footer.subtitle2}</h4>
        <ul className='mt-4 grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-4 gap-4'>
          <li className=''>
            <FaGithub />
            <a
              href='https://github.com/LugpDev2022'
              target='_blank'
              rel='noopener noreferrer'
            >
              @LugpDev2022
            </a>
          </li>
          <li className=''>
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
          <li className=''>
            <FaSquareXTwitter />
            <a
              href='https://twitter.com/LugpDev2022'
              target='_blank'
              rel='noopener noreferrer'
            >
              @LugpDev2022
            </a>
          </li>
          <li className=''>
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

        {/* TODO: Add a lang switch */}
      </div>
    </footer>
  );
};

export default GenericFooter;
