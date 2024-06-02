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

export interface DataContextValue extends StateValue {
  setAccountInfo: (email: string, password: string) => void;
  setSelectedPlan: (plan: Plan, price: number) => void;
}

const DataContextProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<StateValue>({
    email: null,
    password: null,
    plan: null,
    price: 0,
  });

  const setAccountInfo = (email: string, password: string) => {
    setData({
      ...data,
      email,
      password,
    });
  };

  const setSelectedPlan = (plan: Plan, price: number) => {
    setData({
      ...data,
      plan,
      price,
    });
  };

  return (
    <DataContext.Provider value={{ ...data, setAccountInfo, setSelectedPlan }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
