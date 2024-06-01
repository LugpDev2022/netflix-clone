import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';
import './plans.css';

interface Props {
  params: {
    lang: Locale;
  };
}

const PlansPage: React.FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <main className='sign-up-main max-w-[700px]'>
      <span className='step-indicator'>
        {dict.signUp.step} <strong>2</strong> {dict.signUp.of}{' '}
        <strong>3</strong>
      </span>
      <h1 className='step-title'>Choose the plan that’s right for you</h1>

      <div className='grid grid-cols-3 gap-2 lg:gap-3'>
        <div className='plan-card'>
          <h2>Premium</h2>
          <sub>4k + HDR</sub>
        </div>
        <div className='plan-card'>
          <h2>Standard</h2>
          <sub>1080p</sub>
        </div>
        <div className='plan-card'>
          <h2>Standard with ads</h2>
          <sub>1080p</sub>
        </div>
      </div>

      <ul>
        <li>
          <h3>Monthly Price</h3>
          <p>MX$299</p>
        </li>
      </ul>
    </main>
  );
};

export default PlansPage;
