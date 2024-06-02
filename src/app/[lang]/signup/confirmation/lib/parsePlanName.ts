import { Locale } from '@/src/types';
import { Plan } from '../../types';

const planNames = {
  es: {
    premium: 'Premium',
    standard: 'Estándar',
    standard_with_ads: 'Estándar con anuncios',
  },
  en: {
    premium: 'Premium',
    standard: 'Standard',
    standard_with_ads: 'Standard with ads',
  },
};

export const parsePlanName = (plan: Plan, lang: Locale): string => {
  return planNames[lang][plan];
};
