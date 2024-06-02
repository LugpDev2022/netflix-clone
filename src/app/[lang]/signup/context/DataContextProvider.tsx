'use client';

import { DataContext } from './DataContext';

interface Props {
  children: React.ReactNode;
}

const DataContextProvider: React.FC<Props> = ({ children }) => {
  return <DataContext.Provider value={null}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
