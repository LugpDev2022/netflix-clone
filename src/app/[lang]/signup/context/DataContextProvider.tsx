'use client';

import { useState } from 'react';
import { DataContext } from './DataContext';
import { Plan } from '../types';

interface Props {
  children: React.ReactNode;
}

interface StateValue {
  email: string | null;
  password: string | null;
  plan: Plan | null;
  price: number | null;
}

const DataContextProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<StateValue>({
    email: null,
    password: null,
    plan: null,
    price: 0,
  });

  return <DataContext.Provider value={null}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
