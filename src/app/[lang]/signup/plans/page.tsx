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
        {dict.signUp.step} <strong>1</strong> {dict.signUp.of}{' '}
        <strong>3</strong>
      </span>
      <h1 className='step-title'>Choose the plan that’s right for you</h1>
    </main>
  );
};

export default PlansPage;
