'use client';

import { Formik } from 'formik';
import { GrNext } from 'react-icons/gr';

import '../register-form.css';

interface Props {
  dictionary: any;
}

//TODO: Finish register form
const RegisterForm: React.FC<Props> = ({ dictionary }) => {
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      onSubmit={() => {}}
    >
      {() => (
        <form className='mt-4 flex flex-wrap gap-4 justify-center max-w-[600px] mx-auto'>
          <div className='relative w-full sm:w-auto sm:grow'>
            <input
              type='email'
              name='email'
              id='email'
              className='register-form-input'
              placeholder=' '
              required
            />
            <label htmlFor='email' className='register-form-label'>
              Email
            </label>
          </div>
          <button
            type='submit'
            className='bg-red-600 hover:bg-red-700 flex gap-2 text-lg font-medium items-center px-4 py-2 rounded-[4px] sm:text-2xl'
          >
            {dictionary.landing.registerButton} <GrNext size={22} />
          </button>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
