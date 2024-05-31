'use client';

import { Field, Form, Formik } from 'formik';
import { GrNext } from 'react-icons/gr';
import { RxCrossCircled } from 'react-icons/rx';
import * as Yup from 'yup';

import '../register-form.css';

interface Props {
  dictionary: any;
}

const registerSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email is required'),
});

//TODO: Finish register form
const RegisterForm: React.FC<Props> = ({ dictionary }) => {
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={registerSchema}
      validateOnBlur
      validateOnChange
      onSubmit={() => {}}
    >
      {({ errors }) => (
        <Form className='register-form'>
          <div className='relative w-full sm:w-auto sm:grow'>
            <Field
              name='email'
              type='email'
              id='email'
              className={`register-form-input ${
                errors.email ? 'register-form-input-error' : ''
              }`}
              placeholder=' '
              required
            />

            <label htmlFor='email' className='register-form-label'>
              Email
            </label>
          </div>

          {errors.email ? (
            <span className='register-form-error-message'>
              <RxCrossCircled size={18} />
              {errors.email}
            </span>
          ) : (
            <></>
          )}

          <button type='submit' className='register-form-submit-btn'>
            {dictionary.landing.registerButton} <GrNext size={22} />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
