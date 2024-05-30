import FirstSection from '@/src/app/[lang]/landing/sections/FirstSection';
import SecondSection from '@/src/app/[lang]/landing/sections/SecondSection';
import ThirdSection from '@/src/app/[lang]/landing/sections/ThirdSection';
import { Locale } from '@/src/types';
import './landing.css';

interface Props {
  params: {
    lang: Locale;
  };
}

const LandingPage: React.FC<Props> = async ({ params: { lang } }) => {
  return (
    <div className='bg-gray-700'>
      <FirstSection lang={lang} />
      <SecondSection lang={lang} />
      <ThirdSection lang={lang} />
    </div>
  );
};

export default LandingPage;
