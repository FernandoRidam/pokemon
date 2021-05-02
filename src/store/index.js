import React, {
  createContext,
  useContext,
} from 'react';

import {
  usePokemon,
  useType,
  useUser,
  useModalLogin,
  useModalPokemon,
} from './hooks';

export const store = createContext({
  type: {
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
    handleChangePage: ( page ) => {},
    handleChangeType: ( type ) => {},
    handleChangeSearch: ( search ) => {},
    loadPokemon: async () => {
      return true;
    }
  },

  user: {
    data: null,
    myPokemon: [],
    logIn: ( username ) => {},
    logOut: () => {},
    capturePokemon: ( pokemon ) => {},
    releasePokemon: ( pokemonIndex ) => {},
  },

  modalLogin: {
    open: false,
    openModal: () => {},
    closeModal: () => {},
  },

  modalPokemon: {
    open: false,
    data: null,
    openModal: ( data ) => {},
    closeModal: () => {},
  },
});

const { Provider } = store;

export function StateProvider({ children }) {
  const type = useType();
  const pokemon = usePokemon();
  const user = useUser();
  const modalLogin = useModalLogin();
  const modalPokemon = useModalPokemon();

  return (
    <Provider
      value={{
        type,
        pokemon,
        user,
        modalLogin,
        modalPokemon,
      }}
    >
      { children }
    </Provider>
  );
};

export const useStore = () => useContext( store );
