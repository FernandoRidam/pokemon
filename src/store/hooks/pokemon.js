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
  const [ search, setSearch ] = useState('');

  const [ loading, setLoading ] = useState( false );

  // eslint-disable-next-line
  const [ limit, setLimit ] = useState( 6 );
  const [ count, setCount ] = useState( 6 );
  const [ pages, setPages ] = useState( 0 );
  const [ page, setPage ] = useState( 1 );

  const loadPokemon = useCallback( async ( offset ) => {
    try {
      setLoading( true );

      const { success, pokemon, count } = await getPokemon( offset, 100 );

      if( !success ) return false;

      setData([ ...data, ...pokemon.map( pokemon => transformPokemon( pokemon ))]);
      setCount( count );
      setPages( Math.ceil( count / limit ));

      return true;
    } catch ( error ) {
      return false;
    }
    // eslint-disable-next-line
  }, [ data ]);

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
    const oneSecond = 1000;
    let dataLength = 0;

    const ids = [];

    while( ids.length < 15 ) {
      var r = Math.floor( Math.random() * count ) + 1;

      if( ids.indexOf( r ) === -1 ) ids.push( r );
    }

    if( data.length === count ) {
      loading && setLoading( false );

      setRandomData(
        data
          .filter( pokemon => ids.includes( pokemon.id ))
          .sort(( firstEl, secondEl ) => {
            return firstEl.name < secondEl.name ? -1 : 1;
          }));
    } else {
      setTimeout(() => {
        if( data.length !== dataLength ) {
          loadPokemon( data.length );

          dataLength = data.length;
        }
      }, oneSecond );
    }

    // eslint-disable-next-line
  }, [ data ]);

  useEffect(() => {
    if( !type && search === '') setFilteredData([]);

    if( type && search !== '') {
      setFilteredData( data.filter( pokemon => pokemon.name.toLowerCase().includes( search.toLowerCase()) && pokemon.types.includes( type.name )))
    } else {
      if( type ) {
        setFilteredData( data.filter( pokemon => pokemon.types.includes( type.name )));
      }

      if( search !== '') {
        setFilteredData( data.filter( pokemon => pokemon.name.toLowerCase().includes( search.toLowerCase()) || pokemon.types.map( type => type.toLowerCase()).includes( search.toLowerCase())));
      }
    }

    // eslint-disable-next-line
  }, [ type, search ]);

  useEffect(() => {
    async function getDataPage() {
      if( filteredData.length > 0 ) {
        setDataPage( await pagination( filteredData, limit, page ));

        setPages( Math.ceil( filteredData.length / limit ));
      } else {
        setDataPage( await pagination( data, limit, page ));

        setPages( Math.ceil( count / limit ));
      }
    };

    getDataPage();

    // eslint-disable-next-line
  }, [ page, data, filteredData, count ]);

  return useMemo(() => ({
    data,
    dataPage,
    filteredData,
    randomData,
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
    dataPage,
    filteredData,
    randomData,
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
