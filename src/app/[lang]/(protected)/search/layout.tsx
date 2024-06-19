import { Suspense } from 'react';
import SearchBar from './components/SearchBar';

interface Props {
  children: React.ReactNode;
}

const SearchLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Suspense>
        <SearchBar />
      </Suspense>
      <div className='mt-6'>{children}</div>
    </>
  );
};

export default SearchLayout;
