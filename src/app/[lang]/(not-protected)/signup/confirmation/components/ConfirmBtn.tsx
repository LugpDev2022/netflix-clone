'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { deleteCookie } from 'cookies-next';

import { DataContext } from '../../context/DataContext';
import { DataContextValue } from '../../context/DataContextProvider';

interface Props {
  dict: any;
}

const ConfirmBtn: React.FC<Props> = ({ dict }) => {
  const { email, password, plan } = useContext(DataContext) as DataContextValue;
  const router = useRouter();

  const handleClick = async () => {
    //TODO save user on db
    const resp = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (resp?.ok) {
      deleteCookie('sign-up-cookie');
      return router.push('/');
    }
  };

  return (
    <button className='confirmation-next-btn' onClick={handleClick}>
      {dict.signUp.step3.confirmBtn}
    </button>
  );
};

export default ConfirmBtn;
