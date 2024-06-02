import { getDictionary } from '@/src/app/[lang]/dictionaries';
import PlanSelector from '@/src/app/[lang]/signup/plans/components/PlanSelector';
import { Locale } from '@/src/types';
import './plans.css';

interface Props {
  params: {
    lang: Locale;
  };
}

// https://www.netflix.com/signup/planform
const PlansPage: React.FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <main className='sign-up-main max-w-[700px]'>
      <span className='step-indicator'>
        {dict.signUp.step} <strong>2</strong> {dict.signUp.of}{' '}
        <strong>3</strong>
      </span>
      <h1 className='step-title'>{dict.signUp.step2.title}</h1>

      <PlanSelector lang={lang} dict={dict} />
    </main>
  );
};

export default PlansPage;
