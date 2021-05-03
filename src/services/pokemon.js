import api from '../config/api';

export async function getPokemon() {
  const { data } = await api.get('/pokemon', {
    params: {
      offset: 0,
      limit: 1118,
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
