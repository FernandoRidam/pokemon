import {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

import {
  getPokemon,
} from '../../services';

import pagination from '../../utils/pagination';

import {
  transformPokemon,
} from '../../utils/helpers';

export function usePokemon() {
  const [ data, setData ] = useState([]);
  const [ dataPage, setDataPage ] = useState([]);
  const [ filteredData, setFilteredData ] = useState([]);

  const [ randomData, setRandomData ] = useState([]);

  const [ type, setType ] = useState( null );
  const [ search, setSearch ] = useState( null );

  // eslint-disable-next-line
  const [ limit, setLimit ] = useState( 6 );
  const [ pages, setPages ] = useState( 0 );
  const [ page, setPage ] = useState( 1 );

  const loadPokemon = useCallback( async () => {
    try {
      const { success, pokemon, count } = await getPokemon();

      if( !success ) return false;

      setData( pokemon.map( pokemon => transformPokemon( pokemon )));
      setPages( Math.ceil( count / limit ));

      return true;
    } catch ( error ) {
      return false;
    }
  }, []);

  const clearPokemon = useCallback(() => {
    setData([]);
  }, []);

  const handleChangePage = useCallback(( page ) => {
    setPage( page );
  }, []);

  const handleChangeType = useCallback(( type ) => {
    setType( type );
  }, []);

  const handleChangeSearch = useCallback(( search ) => {
    setSearch( search );
  }, []);

  useEffect(() => {
    const ids = [];

    while( ids.length < 5 ) {
      var r = Math.floor( Math.random() * 1118 ) + 1;

      if( ids.indexOf( r ) === -1 ) ids.push( r );
    }

    setTimeout(() => {
      setRandomData( data.filter( pokemon => ids.includes( pokemon.id )));
    }, 3000);
  }, [ data ]);

  useEffect(() => {
    if( !type && !search ) setFilteredData([]);

    if( type && search ) {
      setFilteredData( data.filter( pokemon => pokemon.name.toLowerCase().includes( search.toLowerCase()) && pokemon.types.includes( type.name )))
    } else {
      if( type ) {
        setFilteredData( data.filter( pokemon => pokemon.types.includes( type.name )));
      }

      if( search ) {
        setFilteredData( data.filter( pokemon => pokemon.name.toLowerCase().includes( search.toLowerCase())));
      }
    }
  }, [ type, search ]);

  useEffect( async () => {
    if( filteredData.length > 0 ) {
      setDataPage( await pagination( filteredData, limit, page ));

      setPages( Math.ceil( filteredData.length / limit ));
    } else {
      setDataPage( await pagination( data, limit, page ));

      setPages( Math.ceil( data.length / limit ));
    }

    // eslint-disable-next-line
  }, [ page, data, filteredData ]);

  return useMemo(() => ({
    data,
    dataPage,
    filteredData,
    randomData,
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
    dataPage,
    filteredData,
    randomData,
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
