import {
  useState,
  useMemo,
  useCallback,
} from 'react';

export function useModalPokemon() {
  const [ open, setOpen ] = useState( false );

  const [ data, setData ] = useState( null );

  const openModal = useCallback(( data ) => {
    setData( data );

    setOpen( true );
  }, []);

  const closeModal = useCallback(() => {
    setData( null );

    setOpen( false );
  }, []);

  return useMemo(() => ({
    open,
    data,
    openModal,
    closeModal,
  }), [ open, data, openModal, closeModal ]);
};
