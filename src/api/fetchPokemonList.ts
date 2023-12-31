import axios from 'axios';
import { fetchPokemon } from './fetchPokemon';
import { Pokemon } from '../components/types/Pokemon';

export const baseAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const fetchPokemonList = async (page: number): Promise<Pokemon[]> => {
  const offset = 9 * (page - 1);

  const response = await baseAPI.get(`/pokemon?offset=${offset}&limit=9`);

  const data = await response.data;
  console.log('d');
  const promises = data.results.map(
    async (pokemon: { name: string }) =>
      (await fetchPokemon(pokemon.name))?.data
  );

  const pokemonList = Promise.all(promises);

  return pokemonList;
};
