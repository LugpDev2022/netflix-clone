'use client';

import { Form, Formik } from 'formik';
import { GrNext } from 'react-icons/gr';
import { RxCrossCircled } from 'react-icons/rx';

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
      initialErrors={{
        email: 'Escribe una dirección de email válida',
      }}
      onSubmit={() => {}}
    >
      {({ errors }) => (
        <Form className='mt-4 flex flex-wrap gap-6 justify-center max-w-[600px] mx-auto relative'>
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
          <span className='w-full text-left text-[#eb3942] flex gap-1.5 items-center text-sm absolute top-[52px]'>
            <RxCrossCircled size={18} />
            {errors.email}
          </span>
          <button
            type='submit'
            className='bg-red-600 hover:bg-red-700 flex gap-2 text-lg font-medium items-center px-4 py-2 rounded-[4px] sm:text-2xl'
          >
            {dictionary.landing.registerButton} <GrNext size={22} />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
