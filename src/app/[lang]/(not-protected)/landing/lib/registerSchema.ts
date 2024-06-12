import { Locale } from '@/src/types';
import * as Yup from 'yup';

const errorMessages = {
  es: {
    invalid: 'Email no válido',
    required: 'Email es requerido',
  },
  en: {
    invalid: 'Invalid email',
    required: 'Email is required',
  },
};

export const registerSchema = (lang: Locale) => {
  const { invalid, required } = errorMessages[lang];

  const registerSchema = Yup.object().shape({
    email: Yup.string().email(invalid).required(required),
  });

  return registerSchema;
};
