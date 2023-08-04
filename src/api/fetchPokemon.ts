import axios from 'axios';
import { Pokemon } from '../components/types/Pokemon';

export const baseAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const fetchPokemon = async (pokemon: string) => {
  try {
    const response = await baseAPI.get(`/pokemon/${pokemon}`);

    const data: Pokemon = await response.data;

    return { data, response };
  } catch (err) {
    console.log(err);
  }
};
