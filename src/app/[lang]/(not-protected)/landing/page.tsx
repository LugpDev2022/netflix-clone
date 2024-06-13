import FirstSection from '@/src/app/[lang]/(not-protected)/landing/sections/FirstSection';
import SecondSection from '@/src/app/[lang]/(not-protected)/landing/sections/SecondSection';
import ThirdSection from '@/src/app/[lang]/(not-protected)/landing/sections/ThirdSection';
import FourthSection from '@/src/app/[lang]/(not-protected)/landing/sections/FourthSection';
import Footer from '@/src/app/[lang]/(not-protected)/components/Footer';
import { Locale } from '@/src/types';
import './landing.css';

interface Props {
  params: {
    lang: Locale;
  };
}

const LandingPage: React.FC<Props> = async ({ params: { lang } }) => {
  return (
    <div className='bg-[#232323] text-white '>
      <FirstSection lang={lang} />
      <SecondSection lang={lang} />
      <ThirdSection lang={lang} />
      <FourthSection lang={lang} />
      <Footer lang={lang} theme='dark' />
    </div>
  );
};

export default LandingPage;
