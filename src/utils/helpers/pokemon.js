export function transformPokemon( pokemon ) {
  return {
    id: pokemon.id,
    name: pokemon.name.charAt( 0 ).toUpperCase() + pokemon.name.slice( 1 ),
    type: pokemon.types[ 0 ].type.name.charAt( 0 ).toUpperCase() + pokemon.types[ 0 ].type.name.slice( 1 ),
    url_image: pokemon.sprites.front_default,
  };
};
