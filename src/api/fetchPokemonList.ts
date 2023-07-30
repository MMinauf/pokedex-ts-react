import axios from 'axios';

export const baseAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const getPokemonList = async (page: number) => {
  const offset = 9 * (page - 1);

  const response = await baseAPI.get(`/pokemon?offset=${offset}&limit=9`);

  const data = await response.data;

  console.log(data);

  return data;

  /* const data = await response.data;

  const res = await data.results;

  return res.data; */

  /*  const promises = data.results.map(
    async (pokemon: { name: string }) => (await fetchPokemon(pokemon.name)).data
  );

  const pokemonList = Promise.all(promises);

  return pokemonList; */
};
