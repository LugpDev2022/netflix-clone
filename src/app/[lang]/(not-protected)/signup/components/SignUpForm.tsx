'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { Field, Form, Formik } from 'formik';
import { RxCrossCircled } from 'react-icons/rx';

import { Locale } from '@/src/types';
import { signUpSchema } from '../lib/signUpSchema';
import { DataContext } from '../context/DataContext';
import { DataContextValue } from '../context/DataContextProvider';
import { findUserByEmail } from '@/src/app/actions/findUser';
import { useToast } from '@/src/components/ui/use-toast';
import errorMessages from '@/src/app/[lang]/(not-protected)/loginErrors.json';

interface Props {
  lang: Locale;
  email: string;
  dict: any;
}

const SignUpForm: React.FC<Props> = ({ lang, email, dict }) => {
  const schema = signUpSchema(lang);
  const router = useRouter();
  const { setAccountInfo } = useContext(DataContext) as DataContextValue;
  const { toast } = useToast();

  return (
    <Formik
      initialValues={{
        email,
        password: '',
      }}
      validationSchema={schema}
      validateOnBlur
      validateOnChange
      onSubmit={async ({ email, password }) => {
        const [error, user] = await findUserByEmail(email);

        if (user) {
          return toast({
            variant: 'destructive',
            description: errorMessages[lang].emailInUse,
          });
        }

        setAccountInfo(email, password);
        router.push(`/${lang}/signup/plans`);
      }}
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
              {dict.signUp.step1.passwordLabel}
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
            {dict.signUp.step1.submitBtn}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
