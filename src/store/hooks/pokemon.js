import {
  useState,
  useCallback,
  useMemo,
} from 'react';

import {
  getTypes,
} from '../../services';

export default function useMovies() {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState( false );

  const loadTypes = useCallback( async () => {
    setLoading( true );

    try {
      const { success, data } = await getTypes();

      if( !success ) return false;

      setData(
        data.results
          .map( type => {
            return {
              ...type,
              name: type.name.charAt( 0 ).toUpperCase() + type.name.slice( 1 )
            }
          })
          .sort(( firstEl, secondEl ) => {
            return firstEl.name < secondEl.name ? -1 : 1;
          })
        );

      setLoading( false );

      return true;
    } catch ( error ) {
      setLoading( false );

      return false;
    }
  }, []);

  const clearTypes = (() => {
    setData([]);
  })

  return useMemo(() => ({
    data,
    loading,
    loadTypes,
    clearTypes,
  }), [ data, loading, loadTypes, clearTypes ]);
};
