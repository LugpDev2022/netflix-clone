'use client';

import { Formik } from 'formik';
import { GrNext } from 'react-icons/gr';

interface Props {}

const RegisterForm: React.FC<Props> = ({}) => {
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      onSubmit={() => {}}
    >
      {() => (
        <form className='mt-4 flex flex-wrap gap-4 justify-center'>
          <input
            type='email'
            name='email'
            className='bg-black/80 w-full border border-gray-400 outline-none rounded-[4px] h-12'
          />
          <button
            type='submit'
            className='bg-red-600 hover:bg-red-700 flex gap-2 text-lg font-medium items-center px-4 py-2 rounded-[4px]'
          >
            Get Started <GrNext size={22} />
          </button>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
