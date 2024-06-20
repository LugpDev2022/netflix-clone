'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { deleteCookie } from 'cookies-next';

import { DataContext } from '../../context/DataContext';
import { DataContextValue } from '../../context/DataContextProvider';
import { createUser } from '@/src/app/actions/createUser';
import { encryptText } from '@/src/app/actions/encryptText';
import errorMessages from '@/src/app/[lang]/(not-protected)/loginErrors.json';
import { Locale } from '@/src/types';
import { useToast } from '@/src/components/ui/use-toast';

interface Props {
  dict: any;
  lang: Locale;
}

const ConfirmBtn: React.FC<Props> = ({ dict, lang }) => {
  const { email, password, plan } = useContext(DataContext) as DataContextValue;
  const router = useRouter();
  const { toast } = useToast();

  const handleClick = async () => {
    if (!email || !password || !plan) return;

    const [encryptErr, encryptedPassword] = await encryptText(password);

    if (encryptErr || !encryptedPassword) {
      return toast({
        variant: 'destructive',
        description: errorMessages[lang].unexpected,
      });
    }

    const [createUserErr] = await createUser(email, encryptedPassword, plan);

    if (createUserErr) {
      return toast({
        variant: 'destructive',
        description: errorMessages[lang].unexpected,
      });
    }

    const resp = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (!resp?.ok) {
      return toast({
        variant: 'destructive',
        description: errorMessages[lang].unexpected,
      });
    }

    deleteCookie('sign-up-cookie');
    router.push('/');
  };

  return (
    <button className='confirmation-next-btn' onClick={handleClick}>
      {dict.signUp.step3.confirmBtn}
    </button>
  );
};

export default ConfirmBtn;
