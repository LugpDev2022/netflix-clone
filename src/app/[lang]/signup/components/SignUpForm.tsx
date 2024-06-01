'use client';

import { Field, Form, Formik } from 'formik';
import { RxCrossCircled } from 'react-icons/rx';

import { Locale } from '@/src/types';
import { signUpSchema } from '../lib/signUpSchema';

interface Props {
  lang: Locale;
  email: string;
}

const SignUpForm: React.FC<Props> = ({ lang, email }) => {
  const schema = signUpSchema(lang);

  return (
    <Formik
      initialValues={{
        email,
        password: '',
      }}
      validationSchema={schema}
      validateOnBlur
      validateOnChange
      onSubmit={() => {}}
    >
      {({ errors }) => (
        <Form className='pt-4'>
          <div className='sign-up-form-input-container'>
            <Field
              name='email'
              type='email'
              id='email'
              className={`sign-up-form-input ${
                errors.email ? 'sign-up-form-input-error' : ''
              }`}
              placeholder=' '
              required
            />

            <label htmlFor='email' className='sign-up-form-label'>
              Email
            </label>
          </div>

          {errors.email ? (
            <span className='sign-up-form-error-message'>
              <RxCrossCircled size={16} />
              {errors.email}
            </span>
          ) : (
            <></>
          )}

          <div className='sign-up-form-input-container mt-2.5'>
            <Field
              name='password'
              type='password'
              id='password'
              className={`sign-up-form-input ${
                errors.password ? 'sign-up-form-input-error' : ''
              }`}
              placeholder=' '
              required
            />

            <label htmlFor='email' className='sign-up-form-label'>
              Password
            </label>
          </div>

          {errors.password ? (
            <span className='sign-up-form-error-message'>
              <RxCrossCircled size={16} />
              {errors.password}
            </span>
          ) : (
            <></>
          )}

          <button type='submit' className='sign-up-form-submit-btn'>
            Next
            {/* {dictionary.landing.registerButton} <GrNext size={22} /> */}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
