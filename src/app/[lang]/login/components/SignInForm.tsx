'use client';

import { Field, Form, Formik } from 'formik';
import { RxCrossCircled } from 'react-icons/rx';

import { loginSchema } from '@/src/app/[lang]/login/lib/loginSchema';
import { Locale } from '@/src/types';

interface Props {
  lang: Locale;
}

const SignInForm: React.FC<Props> = ({ lang }) => {
  const schema = loginSchema(lang);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      validateOnBlur
      validateOnChange
      onSubmit={() => {}}
    >
      {({ errors }) => (
        <Form className='pt-4'>
          <div className='login-form-input-container'>
            <Field
              name='email'
              type='email'
              id='email'
              className={`login-form-input ${
                errors.email ? 'login-form-input-error' : ''
              }`}
              placeholder=' '
              required
            />

            <label htmlFor='email' className='login-form-label'>
              Email
            </label>
          </div>

          {errors.email ? (
            <span className='login-form-error-message'>
              <RxCrossCircled size={16} />
              {errors.email}
            </span>
          ) : (
            <></>
          )}

          <div className='login-form-input-container mt-2.5'>
            <Field
              name='password'
              type='password'
              id='password'
              className={`login-form-input ${
                errors.password ? 'login-form-input-error' : ''
              }`}
              placeholder=' '
              required
            />

            <label htmlFor='email' className='login-form-label'>
              Password
              {/* {dict.signUp.step1.passwordLabel} */}
            </label>
          </div>

          {errors.password ? (
            <span className='login-form-error-message'>
              <RxCrossCircled size={16} />
              {errors.password}
            </span>
          ) : (
            <></>
          )}

          <button type='submit' className='login-form-submit-btn'>
            Sign In
            {/* {dict.signUp.step1.submitBtn} */}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
