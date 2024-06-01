import './sign-up.css';

const SignUpPage = () => {
  return (
    <>
      <span className='step-indicator'>
        STEP <strong>1</strong> OF <strong>3</strong>
      </span>
      <h1 className='step-title'>Create a password to start your membership</h1>
      <p className='step-paragraph'>Just a few more steps and you're done!</p>
      <p className='step-paragraph'>We hate paperwork, too.</p>

      <form action=''>
        <input type='email' />
        <input type='password' />
        <button type='submit'>Next</button>
      </form>
    </>
  );
};

export default SignUpPage;
