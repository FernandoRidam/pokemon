import {
  useState,
  useCallback,
  useMemo,
} from 'react';

export function useUser() {
  const [ data, setData ] = useState( null );

  const [ myPokemon, setMyPokemon ] = useState([]);

  const logIn = useCallback(( username ) => {
    setData({ username });
  }, []);

  const logOut = useCallback(() => {
    setData( null );

    setMyPokemon([]);
  }, []);

  const capturePokemon = useCallback(( pokemon ) => {
    setMyPokemon(
      [ ...myPokemon, pokemon ]
        .sort(( firstEl, secondEl ) => {
          return firstEl.name < secondEl.name ? -1 : 1;
        })
    )
  }, [ myPokemon ]);

  const releasePokemon = useCallback(( pokemonIndex ) => {
    setMyPokemon(
      myPokemon
        .filter(( pokemon, index ) => pokemonIndex !== index )
        .sort(( firstEl, secondEl ) => {
          return firstEl.name < secondEl.name ? -1 : 1;
        })
    )
  }, [ myPokemon ]);

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
