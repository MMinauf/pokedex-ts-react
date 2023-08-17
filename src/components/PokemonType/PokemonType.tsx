import React from 'react';
import { pokemonTypes } from '../../pokemonTypes';

type PokemonTypeProps = {
  type: string;
  disabled: boolean;
  setTypeFilter?: (data: string) => void;
};

const PokemonType = ({ type, disabled, setTypeFilter }: PokemonTypeProps) => {
  const [{ name, color }] = pokemonTypes.filter((item) => item.name === type);

  const imgUrl = new URL(
    `/src/assets/pokemonTypes/${name}.svg`,
    import.meta.url
  ).href;

  return (
    <button
      onClick={() => setTypeFilter?.(name)}
      className='flex flex-shrink-0 mr-1 text-white capitalize  items-center justify-between px-2 py-1 rounded-lg font-sans mb-2'
      disabled={disabled}
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
