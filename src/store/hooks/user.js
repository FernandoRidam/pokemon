import {
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react';

export function useUser() {
  const [ data, setData ] = useState( null );

  const [ myPokemon, setMyPokemon ] = useState([]);

  const logIn = useCallback(( username ) => {
    setData({ username });
    localStorage.setItem('PokeApp@User', JSON.stringify({ username }));
  }, []);

  const logOut = useCallback(() => {
    setData( null );
    localStorage.removeItem('PokeApp@User');

    setMyPokemon([]);
    localStorage.removeItem('PokeApp@MyPokemons');
  }, []);

  const capturePokemon = useCallback(( pokemon ) => {
    const myPokemons = [ ...myPokemon, pokemon ]
      .sort(( firstEl, secondEl ) => {
        return firstEl.name < secondEl.name ? -1 : 1;
      });

    setMyPokemon( myPokemons );
    localStorage.setItem('PokeApp@MyPokemons', JSON.stringify( myPokemons ));
  }, [ myPokemon ]);

  const releasePokemon = useCallback(( pokemonIndex ) => {
    const myPokemons = myPokemon
      .filter(( pokemon, index ) => pokemonIndex !== index )
      .sort(( firstEl, secondEl ) => {
        return firstEl.name < secondEl.name ? -1 : 1;
      })

    setMyPokemon( myPokemons );
    localStorage.setItem('PokeApp@MyPokemons', JSON.stringify( myPokemons ));
  }, [ myPokemon ]);

  useEffect(() => {
    const user = JSON.parse( localStorage.getItem('PokeApp@User'));
    const myPokemons = JSON.parse( localStorage.getItem('PokeApp@MyPokemons'));

    setData( user );
    setMyPokemon( myPokemons || []);
  }, []);

  return useMemo(() => ({
    data,
    myPokemon,
    logIn,
    logOut,
    capturePokemon,
    releasePokemon,
  }), [
    data,
    myPokemon,
    logIn,
    logOut,
    capturePokemon,
    releasePokemon
  ]);
};
