import { createContext } from 'react';
import { DataContextValue } from './DataContextProvider';

export const DataContext = createContext<null | DataContextValue>(null);
