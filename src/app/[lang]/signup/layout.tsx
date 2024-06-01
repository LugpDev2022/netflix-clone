import Navbar from '@/src/app/[lang]/signup/components/Navbar';
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
    <>
      <Navbar lang={params.lang} />
      {children}
    </>
  );
};

export default SignUpLayout;
