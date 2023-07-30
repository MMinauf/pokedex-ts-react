import React from 'react';
import { Pokemon } from '../types/Pokemon';
import { pokemonTypes } from '../../pokemonTypes';

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
}: PokemonCardProps) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

  const [{ color }] = pokemonTypes.filter(
    (type) => pokemon.types[0].type.name.indexOf(type.name) !== -1
  );

  return (
    <div className='max-w-md mx-auto rounded overflow-hidden shadow-lg'>
      <img
        className='w-full h-48 object-cover'
        src={imgUrl}
        alt={pokemon.name}
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{pokemon.name}</div>
        <p className='text-gray-700 text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
      </div>
      <div className='px-6 py-4'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Click Me
        </button>
      </div>
    </div>
  );
};
export default PokemonCard;
