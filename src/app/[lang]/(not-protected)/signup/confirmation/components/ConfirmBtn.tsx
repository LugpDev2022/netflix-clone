'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { deleteCookie } from 'cookies-next';

import { DataContext } from '../../context/DataContext';
import { DataContextValue } from '../../context/DataContextProvider';
import { prisma } from '@/src/app/lib/prisma';
import { createUser } from '@/src/app/actions/createUser';
import { encryptText } from '@/src/app/actions/encryptText';

interface Props {
  dict: any;
}

const ConfirmBtn: React.FC<Props> = ({ dict }) => {
  const { email, password, plan } = useContext(DataContext) as DataContextValue;
  const router = useRouter();

  const handleClick = async () => {
    if (!email || !password || !plan) return;

    const [encryptErr, encryptedPassword] = await encryptText(password);

    if (!encryptedPassword) {
      //TODO: Improve alert
      return alert(encryptErr);
    }

    await createUser(email, encryptedPassword, plan);

    const resp = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (!resp?.ok) return alert(resp?.error);

    deleteCookie('sign-up-cookie');
    return router.push('/');
  };

  return (
    <button className='confirmation-next-btn' onClick={handleClick}>
      {dict.signUp.step3.confirmBtn}
    </button>
  );
};

export default ConfirmBtn;
