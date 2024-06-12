import { Locale } from '@/src/types';
import * as Yup from 'yup';

const errorMessages = {
  es: {
    email: {
      invalid: 'Email no válido',
      required: 'Email es requerido',
    },
    password: {
      min: 'La contraseña debe tener al menos 6 caracteres',
      max: 'La contraseña debe tener máximo 60 caracteres',
      required: 'La contraseña es requerida',
    },
  },
  en: {
    email: {
      invalid: 'Invalid email',
      required: 'Email is required',
    },
    password: {
      min: 'Password must be at least 6 characters long',
      max: 'Password must have less than 60 characters',
      required: 'Password is required',
    },
  },
};

export const signUpSchema = (lang: Locale) => {
  const { email, password } = errorMessages[lang];

  const registerSchema = Yup.object().shape({
    email: Yup.string().email(email.invalid).required(email.required),
    password: Yup.string()
      .min(6, password.min)
      .max(60, password.max)
      .required(password.required),
  });

  return registerSchema;
};
