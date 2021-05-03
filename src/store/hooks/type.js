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

  const loadTypes = useCallback( async () => {
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

      return true;
    } catch ( error ) {
      return false;
    }
  }, []);

  const clearTypes = useCallback(() => {
    setData([]);
  }, [])

  return useMemo(() => ({
    data,
    loadTypes,
    clearTypes,
  }), [ data, loadTypes, clearTypes ]);
};
