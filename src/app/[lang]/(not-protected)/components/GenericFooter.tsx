import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';

interface Props {
  lang: Locale;
  className?: string;
}

const GenericFooter: React.FC<Props> = async ({ lang, className = '' }) => {
  const dict = await getDictionary(lang);

  return <footer className='bg-red-600'>Footer</footer>;
};

export default GenericFooter;
