import Navbar from '@/src/app/[lang]/signup/components/Navbar';
import { Locale } from '@/src/types';

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
      <main>{children}</main>
    </>
  );
};

export default SignUpLayout;
