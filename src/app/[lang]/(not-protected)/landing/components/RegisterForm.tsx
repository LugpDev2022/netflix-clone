'use client';

import { useRouter } from 'next/navigation';

import { Field, Form, Formik } from 'formik';
import { deleteCookie } from 'cookies-next';
import { GrNext } from 'react-icons/gr';
import { toast } from 'sonner';
import { RxCrossCircled } from 'react-icons/rx';

import { registerSchema } from '@/src/app/[lang]/(not-protected)/landing/lib/registerSchema';
import { findUserByEmail } from '@/src/app/actions/findUser';
import errorMessages from '@/src/app/[lang]/(not-protected)/loginErrors.json';
import { Locale } from '@/src/types';
import '../register-form.css';

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
      onSubmit={async ({ email }) => {
        const [_, user] = await findUserByEmail(email);

        if (user) {
          toast.error(errorMessages[lang].emailInUse);
          return;
        }

        deleteCookie('sign-up-cookie');
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
