import SignUpForm from './components/SignUpForm';
import './sign-up.css';
// import '../landing/register-form.css';

const SignUpPage = () => {
  return (
    <>
      <span className='step-indicator'>
        STEP <strong>1</strong> OF <strong>3</strong>
      </span>
      <h1 className='step-title'>Create a password to start your membership</h1>
      <p className='step-paragraph'>Just a few more steps and you're done!</p>
      <p className='step-paragraph'>We hate paperwork, too.</p>

      <SignUpForm />
    </>
  );
};

export default SignUpPage;
