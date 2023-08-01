import React from 'react';
import { Pokemon } from '../types/Pokemon';
import { pokemonTypes } from '../../pokemonTypes';
import PokemonType from '../PokemonType/PokemonType';
import { ReactComponent as WeightIcon } from '../../assets/icon-weight.svg';
import { ReactComponent as RulerIcon } from '../../assets/icon-ruler.svg';
import { ReactComponent as BoltIcon } from '../../assets/icon-bolt.svg';

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
      <img className='w-[50%]' src={imgUrl} alt={pokemon.name} />

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

        <div className='flex flex-row mt-2 w-full justify-around'>
          <div className='flex text-md text-white'>
            <WeightIcon></WeightIcon>
            <p className='ml-1'> {pokemon.weight / 10} kg</p>
          </div>
          <div className='flex text-md text-white'>
            <RulerIcon></RulerIcon>
            <p className='ml-1'> {pokemon.height / 10} m</p>
          </div>
        </div>
      </div>
      <a
        href='#'
        className='inline-flex mt-3 justify-center items-center px-3 py-2 text-xl font-medium text-center text-white bg-orange-900 rounded-b-md hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full '
      >
        More Details
        <BoltIcon></BoltIcon>
      </a>
    </div>
  );
};
export default PokemonCard;
