import Spectacular from './components/Spectacular';

interface Props {
  children: React.ReactNode;
}

const WatchLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Spectacular />
      <div className='px-4 md:px-10'>{children}</div>
    </>
  );
};

export default WatchLayout;
