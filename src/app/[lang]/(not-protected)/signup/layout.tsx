import Navbar from '@/src/app/[lang]/(not-protected)/signup/components/Navbar';
import DataContextProvider from '@/src/app/[lang]/(not-protected)/signup/context/DataContextProvider';
import { Locale } from '@/src/types';
import './sign-up.css';
import Footer from '../components/Footer';

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
      <Footer lang={params.lang} theme='light' />
    </DataContextProvider>
  );
};

export default SignUpLayout;
