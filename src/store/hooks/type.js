import {
  useState,
  useCallback,
  useMemo,
} from 'react';

import {
  getTypes,
} from '../../services';

import {
  transformType,
} from '../../utils/helpers';

export function useType() {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState( false );

  const loadTypes = useCallback( async () => {
    setLoading( true );

    try {
      const { success, types } = await getTypes();

      if( !success ) return false;

      setData(
        types
          .sort(( firstEl, secondEl ) => {
            return firstEl.name < secondEl.name ? -1 : 1;
          })
          .map( type => transformType( type ))
        );

      setLoading( false );

      return true;
    } catch ( error ) {
      setLoading( false );

      return false;
    }
  }, []);

  const clearTypes = useCallback(() => {
    setData([]);
  }, [])

  return useMemo(() => ({
    data,
    loading,
    loadTypes,
    clearTypes,
  }), [ data, loading, loadTypes, clearTypes ]);
};
