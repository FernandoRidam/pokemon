import {
  useState,
  useMemo,
  useEffect,
  useCallback,
} from 'react';

export function useAlert() {
  const fourSeconds = 4000;

  const [ open, setOpen ] = useState( false );
  const [ message, setMessage ] = useState( null );

  const openAlert = useCallback(( message ) => {
    setMessage( message );

    setOpen( true );

    setTimeout(() => {
      closeAlert();
    }, fourSeconds );

    // eslint-disable-next-line
  }, []);

  const closeAlert = useCallback(() => {
    setOpen( false );
  }, []);

  useEffect(() => {
    if( !open ) {
      setTimeout(() => {
        setMessage( null );
      }, fourSeconds / 4 );
    }
  }, [ open ]);

  return useMemo(() => ({
    open,
    message,
    openAlert,
    closeAlert,
  }), [ open, message, openAlert, closeAlert ]);
};
