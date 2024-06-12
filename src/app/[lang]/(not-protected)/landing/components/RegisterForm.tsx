'use client';

import { Field, Form, Formik } from 'formik';
import { GrNext } from 'react-icons/gr';
import { RxCrossCircled } from 'react-icons/rx';

import { registerSchema } from '../lib/registerSchema';
import { Locale } from '@/src/types';
import '../register-form.css';
import { useRouter } from 'next/navigation';

interface Props {
  dictionary: any;
  lang: Locale;
}

const RegisterForm: React.FC<Props> = ({ dictionary, lang }) => {
  const router = useRouter();
  const schema = registerSchema(lang);

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={schema}
      validateOnBlur
      validateOnChange
      onSubmit={({ email }) => {
        // TODO: Check if email exists on db
        router.push(`/${lang}/signup?email=${email}`);
      }}
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
