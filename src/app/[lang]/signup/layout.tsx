import Navbar from '@/src/app/[lang]/signup/components/Navbar';

interface Props {
  children: React.ReactNode;
}

const SignUpLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default SignUpLayout;
