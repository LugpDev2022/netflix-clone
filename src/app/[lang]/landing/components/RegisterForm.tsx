import { MdNavigateNext } from 'react-icons/md';

const RegisterForm = () => {
  return (
    <form>
      <input type='email' />
      <button type='submit'>
        Get Started <MdNavigateNext />
      </button>
    </form>
  );
};

export default RegisterForm;
