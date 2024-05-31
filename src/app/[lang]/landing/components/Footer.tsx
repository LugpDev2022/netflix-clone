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
        <p>This website is not the official Netflix site.</p>
        It was created by{' '}
        <a
          href='https://github.com/LugpDev2022'
          target='_blank'
          rel='noopener noreferrer'
          className='font-bold'
        >
          @LugpDev2022{' '}
        </a>
        for programming practice.
      </div>
    </footer>
  );
};

export default Footer;
