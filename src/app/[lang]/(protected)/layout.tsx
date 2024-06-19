import { Locale } from '@/src/types';
import { getDictionary } from '../dictionaries';
import Navbar from './components/Navbar';
import './protected.css';

interface Props {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

const ProtectedLayout: React.FC<Props> = async ({
  children,
  params: { lang },
}) => {
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar lang={lang} dict={dict} />
      <div className='pt-[115px] sm:pt-[74px]'>{children}</div>
    </>
  );
};

export default ProtectedLayout;
