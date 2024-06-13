import Navbar from '@/src/app/[lang]/(not-protected)/signup/components/Navbar';
import DataContextProvider from '@/src/app/[lang]/(not-protected)/signup/context/DataContextProvider';
import { Locale } from '@/src/types';
import './sign-up.css';
import GenericFooter from '../components/GenericFooter';

interface Props {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

const SignUpLayout: React.FC<Props> = ({ children, params }) => {
  return (
    <DataContextProvider>
      <div className='min-h-screen'>
        <Navbar lang={params.lang} />
        {children}
      </div>
      <GenericFooter lang={params.lang} />
    </DataContextProvider>
  );
};

export default SignUpLayout;
