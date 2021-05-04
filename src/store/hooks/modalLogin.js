import {
  useState,
  useMemo,
  useCallback,
} from 'react';

export function useModalLogin() {
  const [ open, setOpen ] = useState( false );

  const openModal = useCallback(() => {
    setOpen( true );
  }, []);

  const closeModal = useCallback(() => {
    setOpen( false );
  }, []);

  return useMemo(() => ({
    open,
    openModal,
    closeModal,
  }), [ open, openModal, closeModal ]);
};
