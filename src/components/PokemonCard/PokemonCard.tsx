import React from 'react';
import { Pokemon } from '../types/Pokemon';
import { pokemonTypes } from '../../pokemonTypes';
import PokemonType from '../PokemonType/PokemonType';

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

  const formatPokemonId = (id: number) => {
    if (id < 10) return `#00${id}`;
    else if (id >= 10 && id < 99) return `#0${id}`;
    else return `#${id}`;
  };

  return (
    <div className='flex flex-col items-center max-w-auto border rounded-lg shadow bg-gray-800 border-gray-700'>
      <img className='' src={imgUrl} alt={pokemon.name} />

      <div className='p-5 flex flex-col items-center'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>
          {formatPokemonId(pokemon.id)}
        </h5>
        <h1 className='mb-2 text-4xl font-bold tracking-tight text-white capitalize'>
          {pokemon.name}
        </h1>
        <div className='flex flex-wrap mt-2'>
          {pokemon.types.map(({ type }) => (
            <PokemonType key={type.name} type={type.name} />
          ))}
        </div>

        <div></div>
        <a
          href='#'
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Read more
          <svg
            className='w-3.5 h-3.5 ml-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default PokemonCard;
