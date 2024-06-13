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

const GenericFooter: React.FC<Props> = async ({ lang, theme }) => {
  const dict = await getDictionary(lang);

  return (
    <footer
      className={` 
      p-6
      text-center
      lg:text-left
      ${
        theme === 'light'
          ? 'bg-[#f3f3f3] text-[#737373] border-t border-[#e6e6e6]'
          : 'bg-black text-white/70'
      }`}
    >
      <div>
        <h4 className='text-lg font-bold'>{dict.landing.footer.subtitle1}</h4>
        <p className='text-pretty'>{dict.landing.footer.information}</p>

        <h4 className='text-lg font-bold mt-6'>
          {dict.landing.footer.subtitle2}
        </h4>
        <ul className='mt-4 grid grid-cols-1 justify-center gap-5 sm:gap-4 sm:grid-cols-2 md:grid-cols-4'>
          <li className='flex gap-2.5 justify-center lg:justify-start'>
            <FaGithub size={24} />
            <a
              href='https://github.com/LugpDev2022'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'
            >
              @LugpDev2022
            </a>
          </li>
          <li className='flex gap-2.5 justify-center lg:justify-start'>
            <FaLinkedin size={24} />
            <a
              href={`https://www.linkedin.com/in/luiscerv${
                lang === 'en' ? '/en' : '/'
              }`}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'
            >
              in/luiscerv
            </a>
          </li>
          <li className='flex gap-2.5 justify-center lg:justify-start'>
            <FaSquareXTwitter size={24} />
            <a
              href='https://twitter.com/LugpDev2022'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'
            >
              @LugpDev2022
            </a>
          </li>
          <li className='flex gap-2.5 justify-center lg:justify-start'>
            <FaLink size={24} />
            <a
              href={`https://luiscerv.tech${lang === 'en' ? '/' : '/es'}`}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'
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
