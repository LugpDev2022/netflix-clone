import Spectacular from './components/Spectacular';
import './explore.css';

interface Props {
  children: React.ReactNode;
}

const WatchLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Spectacular />
      <main className='px-4 md:px-10'>{children}</main>
    </>
  );
};

export default WatchLayout;
