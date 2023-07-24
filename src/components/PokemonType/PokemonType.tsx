import React from 'react';
import { pokemonTypes } from '../../pokemonTypes';

type PokemonTypeProps = {
  type: string;
};

const PokemonType = ({ type }: PokemonTypeProps) => {
  const [{ name, color }] = pokemonTypes.filter((item) => item.name === type);

  const imgUrl = new URL(
    `/src/assets/pokemonTypes/${name}.svg`,
    import.meta.url
  ).href;

  return (
    <button
      className='flex flex-shrink-0 mr-1 text-white capitalize  items-center justify-between px-2 py-1 rounded-lg font-sans mb-1'
      disabled
      style={{
        backgroundColor: color,
      }}
    >
      <img src={imgUrl} className='mr-1'></img>
      {name}
    </button>
  );
};

export default PokemonType;
