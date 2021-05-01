import React, {
  createContext,
  useContext,
} from 'react';

import useType from './hooks/type';
import usePokemon from './hooks/pokemon';

export const store = createContext({
  types: {
    data: [],
    loading: false,
    clearTypes: () => {},
    loadTypes: async () => {
      return true;
    }
  },

  pokemon: {
    data: [],
    filteredData: [],
    loading: false,
    pages: 0,
    type: '',
    search: '',
    clearPokemon: () => {},
    handleChangePage: () => {},
    handleChangeType: () => {},
    handleChangeSearch: () => {},
    loadPokemon: async () => {
      return true;
    }
  },
});

const { Provider } = store;

export function StateProvider({ children }) {
  const types = useType();
  const pokemon = usePokemon();

  return (
    <Provider
      value={{
        types,
        pokemon,
      }}
    >
      { children }
    </Provider>
  );
};

export const useStore = () => useContext( store );
