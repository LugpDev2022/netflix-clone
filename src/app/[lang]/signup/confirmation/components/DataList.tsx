'use client';

import { useContext } from 'react';

import { DataContextValue } from '../../context/DataContextProvider';
import { DataContext } from '../../context/DataContext';
import { parsePlanName } from '../lib/parsePlanName';
import { Locale } from '@/src/types';

interface Props {
  dict: any;
  lang: Locale;
}

const DataList: React.FC<Props> = ({ dict, lang }) => {
  const { email, plan, price } = useContext(DataContext) as DataContextValue;

  //TODO: Use a loader
  if (!plan || !price) return;

  const planName = parsePlanName(plan, lang);

  return (
    <ul className='confirmation-data-list'>
      <li>
        <span className='confirmation-data-label'>Email</span>
        <span className='confirmation-data-value'>{email}</span>
      </li>
      <li>
        <span className='confirmation-data-label'>Plan</span>
        <span className='confirmation-data-value'>{planName}</span>
      </li>
      <li>
        <span className='confirmation-data-label'>
          {dict.signUp.step3.price}
        </span>
        <span className='confirmation-data-value'>MXN {price}</span>
      </li>
    </ul>
  );
};

export default DataList;
