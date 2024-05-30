import { Locale } from '@/src/types';
import { getDictionary } from '../dictionaries';
import Navbar from './components/Navbar';
import styles from './landing.module.css';
import RegisterForm from './components/RegisterForm';

interface Props {
  params: {
    lang: Locale;
  };
}

const LandingPage: React.FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <div className='bg-gray-700'>
      <section className={`${styles.background}`}>
        <div className='z-20 bg-gradient-to-b from-black/80 to-black/50 px-6 text-center h-full'>
          <div className='max-w-screen-lg mx-auto'>
            <Navbar lang={lang} />

            <h1 className='text-[32px] leading-tight font-bold mt-[30px] text-pretty lg:mt-20 lg:font-black lg:text-5xl lg:leading-normal'>
              {dict.landing.title}
            </h1>

            <p className='text-lg mt-4 lg:text-2xl'>
              Watch anywhere. Cancel anytime
            </p>

            <div className='px-6 pb-10'>
              <h3 className='text-lg mt-6 lg:text-3l'>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>

              <RegisterForm />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-black mt-2'>
        <h2>Enjoy on your TV</h2>
        <p>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
