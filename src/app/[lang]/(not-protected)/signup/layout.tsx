import Navbar from '@/src/app/[lang]/(not-protected)/signup/components/Navbar';
import DataContextProvider from '@/src/app/[lang]/(not-protected)/signup/context/DataContextProvider';
import { Locale } from '@/src/types';
import './sign-up.css';

interface Props {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

const SignUpLayout: React.FC<Props> = ({ children, params }) => {
  return (
    <DataContextProvider>
      <Navbar lang={params.lang} />
      {children}
    </DataContextProvider>
  );
};

export default SignUpLayout;
