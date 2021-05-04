const orderStats = [
  'hp',
  'speed',
  'attack',
  'defense',
  'special-attack',
  'special-defense',
];

export function transformPokemon( pokemon ) {
  const stats = [];

  orderStats.forEach( statLabel => {
    pokemon.stats
      .filter( stat => stat.stat.name === statLabel )
      .map( stat => stats.push({
        key: stat.stat.name.replace('-', '_'),
        label: createLabel( stat.stat.name.replace('-', ' ')),
        stat: stat.base_stat,
      }));
  });

  const types = pokemon.types.map( type => type.type.name.charAt( 0 ).toUpperCase() + type.type.name.slice( 1 ))

  return {
    id: pokemon.id,
    name: pokemon.name.charAt( 0 ).toUpperCase() + pokemon.name.slice( 1 ),
    type: types[ 0 ],
    types,
    url_image: pokemon.sprites.other['official-artwork'].front_default,
    url_icon: pokemon.sprites.front_default,
    stats,
  };
};

function createLabel( text ) {
  let words = text.toLowerCase().split(" ");
  for ( let a = 0; a < words.length; a++ ) {
      let w = words[ a ];
      words[ a ] = w[ 0 ].toUpperCase() + w.slice( 1 );
  }
  return words.join(" ");
}
