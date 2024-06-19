import Navbar from './components/Navbar';
import './protected.css';

interface Props {
  children: React.ReactNode;
}

const ProtectedLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='pt-[115px] sm:pt-[74px]'>{children}</div>
    </>
  );
};

export default ProtectedLayout;
