import SignUpForm from './components/SignUpForm';
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

const SignUpPage: React.FC<Props> = ({
  params: { lang },
  searchParams: { email },
}) => {
  return (
    <>
      <span className='step-indicator'>
        STEP <strong>1</strong> OF <strong>3</strong>
      </span>
      <h1 className='step-title'>Create a password to start your membership</h1>
      <p className='step-paragraph'>Just a few more steps and you're done!</p>
      <p className='step-paragraph'>We hate paperwork, too.</p>

      <SignUpForm lang={lang} email={email ? email : ''} />
    </>
  );
};

export default SignUpPage;
