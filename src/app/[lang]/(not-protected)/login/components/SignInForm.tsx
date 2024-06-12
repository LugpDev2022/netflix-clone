'use client';

import { useRouter } from 'next/navigation';

import { signIn } from 'next-auth/react';
import { Field, Form, Formik } from 'formik';
import { RxCrossCircled } from 'react-icons/rx';

import { loginSchema } from '@/src/app/[lang]/(not-protected)/login/lib/loginSchema';
import { Locale } from '@/src/types';

interface Props {
  lang: Locale;
  dict: any;
}

const SignInForm: React.FC<Props> = ({ lang, dict }) => {
  const router = useRouter();
  const schema = loginSchema(lang);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      validateOnBlur
      validateOnChange
      onSubmit={async ({ email, password }) => {
        const resp = await signIn('credentials', {
          email,
          password,
          redirect: false,
        });

        if (resp?.ok) return router.push('/');

        //TODO: Improve alert
        alert('Error al iniciar sesión');
      }}
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
              {dict.login.passwordLabel}
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
            {dict.login.button}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
