import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';

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
        <div className='bg-blue-300'>Premium</div>
        <div className='bg-blue-300'>Standard</div>
        <div className='bg-blue-300'>Standard with ads</div>
      </div>

      <ul>
        <li>
          <h2>Monthly Price</h2>
          <p>MX$299</p>
        </li>
      </ul>
    </main>
  );
};

export default PlansPage;
