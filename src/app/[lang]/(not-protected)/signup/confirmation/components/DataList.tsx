'use client';

import { useContext, useEffect, useState } from 'react';

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <ul className='confirmation-data-list'>
      <li>
        <span className='confirmation-data-label'>Email</span>
        {isClient ? (
          <span className='confirmation-data-value'>{email}</span>
        ) : (
          <div className='w-3/4 h-4 bg-[#676767] rounded animate-pulse'></div>
        )}
      </li>
      <li>
        <span className='confirmation-data-label'>Plan</span>
        {isClient && plan ? (
          <span className='confirmation-data-value'>
            {parsePlanName(plan, lang)}
          </span>
        ) : (
          <div className='w-1/2 h-4 bg-[#676767] rounded animate-pulse'></div>
        )}
      </li>
      <li>
        <span className='confirmation-data-label'>
          {dict.signUp.step3.price}
        </span>
        {isClient ? (
          <span className='confirmation-data-value'>MXN {price}</span>
        ) : (
          <div className='w-1/2 h-4 bg-[#676767] rounded animate-pulse'></div>
        )}
      </li>
    </ul>
  );
};

export default DataList;
