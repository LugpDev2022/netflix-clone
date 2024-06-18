import Navbar from './components/Navbar';

interface Props {
  children: React.ReactNode;
}

const ProtectedLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default ProtectedLayout;
