import React, {
  createContext,
  useContext,
} from 'react';

import useType from './hooks/type';

export const store = createContext({
  types: {
    data: [],
    loading: false,
    clearTypes: () => {},
    loadTypes: async () => {
      return true;
    }
  },
});

const { Provider } = store;

export function StateProvider({ children }) {
  const types = useType();

  return (
    <Provider
      value={{
        types,
      }}
    >
      { children }
    </Provider>
  );
};

export const useStore = () => useContext( store );
