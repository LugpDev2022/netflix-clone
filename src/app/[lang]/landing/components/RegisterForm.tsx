'use client';

import { Formik } from 'formik';
import { MdNavigateNext } from 'react-icons/md';

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      onSubmit={() => {}}
    >
      {() => (
        <form>
          <input type='email' name='email' />
          <button type='submit'>
            Get Started <MdNavigateNext />
          </button>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
