import axios from 'axios';
import { fetchPokemon } from './fetchPokemon';

export const baseAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const fetchPokemonList = async (page: number) => {
  const offset = 9 * (page - 1);

  const response = await baseAPI.get(`/pokemon?offset=${offset}&limit=9`);

  const data = await response.data;

  console.log('data');
  console.log(data);

  const promises = data.results.map(
    async (pokemon: { name: string }) => (await fetchPokemon(pokemon.name)).data
  );

  console.log('promises');
  console.log(promises);

  const pokemonList = Promise.all(promises);
  console.log('pl');
  console.log(pokemonList);

  return pokemonList;
};
