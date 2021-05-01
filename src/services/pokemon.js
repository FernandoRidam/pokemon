import api from '../config/api';

export async function getPokemon( offset, limit = 6 ) {
  const { data } = await api.get('/pokemon', {
    params: {
      offset,
      limit,
    },
  });

  let pokemon = [];

  if( data.results.length > 0 ) {
    pokemon = await Promise.all(
      data.results.map( async pokemon => {
        const { data } = await api.get( pokemon.url );

        return data;
      })
    );
  }

  return {
    success: true,
    message: 'Sucesso!',
    count: data.count,
    pokemon,
  };
};
