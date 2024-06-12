import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';
import DataList from './components/DataList';
import ConfirmBtn from './components/ConfirmBtn';
import './confirmation.css';

interface Props {
  params: {
    lang: Locale;
  };
}

const ConfirmationPage: React.FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <main className='sign-up-main max-w-[550px]'>
      <span className='step-indicator'>
        {dict.signUp.step} <strong>3</strong> {dict.signUp.of}{' '}
        <strong>3</strong>
      </span>

      <h1 className='step-title'>{dict.signUp.step3.title}</h1>

      <DataList dict={dict} lang={lang} />

      <ConfirmBtn dict={dict} lang={lang} />
    </main>
  );
};

export default ConfirmationPage;
