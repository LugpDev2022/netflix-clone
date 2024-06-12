import * as Yup from 'yup';
import { Locale } from '@/src/types';

const errorMessages = {
  es: {
    email: {
      invalid: 'Email no válido',
      required: 'Email es requerido',
    },
    password: {
      required: 'La contraseña es requerida',
    },
  },
  en: {
    email: {
      invalid: 'Invalid email',
      required: 'Email is required',
    },
    password: {
      required: 'Password is required',
    },
  },
};

export const loginSchema = (lang: Locale) => {
  const { email, password } = errorMessages[lang];

  const schema = Yup.object().shape({
    email: Yup.string().email(email.invalid).required(email.required),
    password: Yup.string().required(password.required),
  });

  return schema;
};
