import SignUpForm from './components/SignUpForm';
import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';
import './sign-up.css';

interface Props {
  params: {
    lang: Locale;
  };
  searchParams: {
    email: string;
  };
}

const SignUpPage: React.FC<Props> = async ({
  params: { lang },
  searchParams: { email },
}) => {
  const dict = await getDictionary(lang);

  return (
    <>
      <span className='step-indicator'>
        {dict.signUp.step} <strong>1</strong> {dict.signUp.of}{' '}
        <strong>3</strong>
      </span>
      <h1 className='step-title'>{dict.signUp.step1.title}</h1>
      <p className='step-paragraph'>{dict.signUp.step1.paragraph1}</p>
      <p className='step-paragraph'>{dict.signUp.step1.paragraph2}</p>

      <SignUpForm lang={lang} email={email ? email : ''} dict={dict} />
    </>
  );
};

export default SignUpPage;
