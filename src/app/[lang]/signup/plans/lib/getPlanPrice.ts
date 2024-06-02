import { Plan } from '../../types';

export const getPlanPrice = (plan: Plan): number => {
  switch (plan) {
    case 'premium':
      return 299;

    case 'standard':
      return 219;

    case 'standard_with_ads':
      return 99;

    default:
      return 0;
  }
};
