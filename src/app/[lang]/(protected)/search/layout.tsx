import React from 'react';
import SearchBar from './components/SearchBar';
interface Props {
  children: React.ReactNode;
  searchParams: {
    q: string;
  };
}

const SearchLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SearchBar />
      <div className='mt-6'>{children}</div>
    </>
  );
};

export default SearchLayout;
