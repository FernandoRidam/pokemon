import {
  useState,
  useMemo,
} from 'react';

export function useModalLogin() {
  const [ open, setOpen ] = useState( false );

  const openModal = () => {
    setOpen( true );
  };

  const closeModal = () => {
    setOpen( false );
  };

  return useMemo(() => ({
    open,
    openModal,
    closeModal,
  }), [ open, openModal, closeModal ]);
};
