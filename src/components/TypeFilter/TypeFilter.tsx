import React from 'react';
import { pokemonTypes } from '../../pokemonTypes';
import PokemonType from '../PokemonType/PokemonType';

type TypeFilterProps = {
  setTypeFilter: (data: string) => void;
};

const TypeFilter = ({ setTypeFilter }: TypeFilterProps) => {
  return (
    <div className='mb-2'>
      <h1 className='mb-1 font-sans text-xl font-bold text-white'>
        Filter by type:
      </h1>
      <div className='flex items-center flex-wrap'>
        {pokemonTypes.map((item) => {
          return (
            <PokemonType
              setTypeFilter={setTypeFilter}
              disabled={false}
              key={item.name}
              type={item.name}
            ></PokemonType>
          );
        })}
      </div>
    </div>
  );
};
export default TypeFilter;
