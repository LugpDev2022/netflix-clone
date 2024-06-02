import { createContext } from 'react';
import { ContextValue } from './DataContextProvider';

export const DataContext = createContext<null | ContextValue>(null);
