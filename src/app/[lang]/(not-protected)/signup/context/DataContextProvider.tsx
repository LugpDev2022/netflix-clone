'use client';

import { useEffect, useState } from 'react';

import { getCookie, setCookie } from 'cookies-next';

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
  const [data, setData] = useState<StateValue>(() => {
    const cookie = getCookie('sign-up-cookie');

    if (!cookie)
      return {
        email: null,
        password: null,
        plan: null,
        price: 0,
      };

    const { email, password, plan, price } = JSON.parse(cookie);

    return {
      email,
      password,
      plan,
      price,
    };
  });

  useEffect(() => {
    setCookie('sign-up-cookie', JSON.stringify(data));
  }, [data]);

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
