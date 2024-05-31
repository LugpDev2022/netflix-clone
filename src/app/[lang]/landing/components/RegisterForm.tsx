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
        <Form className='register-form'>
          <div className='relative w-full sm:w-auto sm:grow'>
            <input
              type='email'
              name='email'
              id='email'
              className={`register-form-input ${
                errors ? 'register-form-input-error' : ''
              }`}
              placeholder=' '
              required
            />
            <label htmlFor='email' className='register-form-label'>
              Email
            </label>
          </div>
          <span className='register-form-error-message'>
            <RxCrossCircled size={18} />
            {errors.email}
          </span>
          <button type='submit' className='register-form-submit-btn'>
            {dictionary.landing.registerButton} <GrNext size={22} />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
