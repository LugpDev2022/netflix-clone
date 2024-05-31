import Navbar from '@/src/app/[lang]/landing/components/Navbar';
import RegisterForm from '@/src/app/[lang]/landing/components/RegisterForm';
import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';

interface Props {
  lang: Locale;
}

const FirstSection: React.FC<Props> = async ({ lang }) => {
  const dict = await getDictionary(lang);

  return (
    <section className='landing-bg-image'>
      <div className='z-20 bg-gradient-to-b from-black/80 via-black/50 to-black/80 px-6 text-center h-full'>
        <div className='max-w-screen-lg mx-auto'>
          <Navbar lang={lang} />

          <h1 className='text-[32px] leading-tight font-bold mt-[30px] text-pretty lg:mt-20 lg:font-black lg:text-5xl lg:leading-normal'>
            {dict.landing.title}
          </h1>

          <p className='text-lg mt-4 lg:text-2xl'>{dict.landing.slogan}</p>

          <div className='px-6 pb-10'>
            <h3 className='text-lg mt-6 lg:text-xl'>
              {dict.landing.registerSubtitle}
            </h3>

            <RegisterForm dictionary={dict} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
