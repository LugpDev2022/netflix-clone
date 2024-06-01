'use client';

import { FaCheckCircle } from 'react-icons/fa';

import { Locale } from '@/src/types';
import data from '../plans.json';
import { useState } from 'react';

interface Props {
  lang: Locale;
  dict: any;
}

type Plan = 'premium' | 'standard' | 'standard_with_ads';

const PlanSelector: React.FC<Props> = ({ lang, dict }) => {
  const [plan, setPlan] = useState<Plan>('premium');

  return (
    <>
      <div className='grid grid-cols-3 gap-2 lg:gap-3'>
        {/* TODO: Add background radiants */}
        <button
          onClick={() => setPlan('premium')}
          className={
            plan === 'premium' ? 'plan-card-selected bg-blue-600' : 'plan-card'
          }
        >
          <h2>{dict.signUp.step2.plans.premium}</h2>
          <sub>4k + HDR</sub>

          <FaCheckCircle />
        </button>
        <button
          onClick={() => setPlan('standard')}
          className={
            plan === 'standard' ? 'plan-card-selected bg-blue-600' : 'plan-card'
          }
        >
          <h2>{dict.signUp.step2.plans.standard}</h2>
          <sub>1080p</sub>

          <FaCheckCircle />
        </button>
        <button
          onClick={() => setPlan('standard_with_ads')}
          className={
            plan === 'standard_with_ads'
              ? 'plan-card-selected bg-blue-600'
              : 'plan-card'
          }
        >
          <h2>{dict.signUp.step2.plans.standard_with_ads}</h2>
          <sub>1080p</sub>

          <FaCheckCircle />
        </button>
      </div>

      <ul className='plan-feature-list'>
        {data[lang][plan].map(({ label, value }) => (
          <li key={label}>
            <h3>{label}</h3>
            <p>{value}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlanSelector;
