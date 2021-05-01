import {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

import {
  getPokemon,
} from '../../services';

import {
  transformPokemon,
} from '../../utils/helpers';

export default function useMovies() {
  const [ loading, setLoading ] = useState( false );

  const [ data, setData ] = useState([]);
  const [ filteredData, setFilteredData ] = useState([]);

  const [ type, setType ] = useState( null );
  const [ search, setSearch ] = useState( null );

  // eslint-disable-next-line
  const [ limit, setLimit ] = useState( 6 );
  const [ pages, setPages ] = useState( 0 );
  const [ page, setPage ] = useState( 1 );

  const loadPokemon = useCallback( async () => {
    setLoading( true );

    const offset = ( page - 1 ) * limit;

    try {
      const { success, pokemon, count } = await getPokemon( offset, limit );

      if( !success ) return false;

      setData( pokemon.map( pokemon => transformPokemon( pokemon )));
      setPages( Math.ceil( count / limit ));

      setLoading( false );

      return true;
    } catch ( error ) {
      setLoading( false );

      return false;
    }
  }, [ page, limit ]);

  const clearPokemon = useCallback(() => {
    setData([]);
  }, []);

  const handleChangePage = useCallback(( page ) => {
    setPage( page );

    setType( null );
    setSearch( null );
  }, []);

  const handleChangeType = useCallback(( type ) => {
    setType( type );
  }, []);

  const handleChangeSearch = useCallback(( search ) => {
    setSearch( search );
  }, []);

  const handleFilter = useCallback(() => {
    console.log( type );

    if( type || search ) {
      if( type ) {
        if( filteredData.length > 0 && search ) {
          setFilteredData( filteredData.filter( pokemon => pokemon.type === type.name ));
        } else {
          setFilteredData( data.filter( pokemon => pokemon.type === type.name ));
        }
      }

      if( search ) {
        if( filteredData.length > 0 && type ) {
          setFilteredData(
            filteredData.filter( pokemon =>
              pokemon.type.toLowerCase().includes( search.toLowerCase()) ||
              pokemon.name.toLowerCase().includes( search.toLowerCase())
            )
          );
        } else {
          setFilteredData(
            data.filter( pokemon =>
              pokemon.type.toLowerCase().includes( search.toLowerCase()) ||
              pokemon.name.toLowerCase().includes( search.toLowerCase())
            )
          );
        }
      }
    } else {
      setFilteredData([]);
    }
  }, [ type, search, data, filteredData ]);

  useEffect(() => {
    handleFilter();

    // eslint-disable-next-line
  }, [ type, search ]);

  useEffect(() => {
    loadPokemon();

    // eslint-disable-next-line
  }, [ page ]);

  return useMemo(() => ({
    data,
    filteredData,
    loading,
    pages,
    type,
    search,
    loadPokemon,
    clearPokemon,
    handleChangePage,
    handleChangeType,
    handleChangeSearch,
  }), [
    data,
    filteredData,
    loading,
    pages,
    type,
    search,
    loadPokemon,
    clearPokemon,
    handleChangePage,
    handleChangeType,
    handleChangeSearch
  ]);
};
