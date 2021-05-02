import {
  useState,
  useMemo,
} from 'react';

export function useModalPokemon() {
  const [ open, setOpen ] = useState( false );

  const [ data, setData ] = useState( null );

  const openModal = ( data ) => {
    setData( data );

    setOpen( true );
  };

  const closeModal = () => {
    setData( null );

    setOpen( false );
  };

  return useMemo(() => ({
    open,
    data,
    openModal,
    closeModal,
  }), [ open, data, openModal, closeModal ]);
};
