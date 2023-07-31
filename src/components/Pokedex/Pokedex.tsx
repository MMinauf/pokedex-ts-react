import React from 'react';
import { Pokemon } from '../types/Pokemon';
import PokemonCard from '../PokemonCard/PokemonCard';

type PokedexProps = {
  pokemonList: Pokemon[];
};

const Pokedex: React.FC<PokedexProps> = ({ pokemonList }) => {
  return (
    <div className='flex justify-center bg-gradient-to-b from-red-950 to-black'>
      {/* <div className='flex flex-row flex-wrap m-5 justify-between w-screen items-center  max-w-screen-xl'> */}
      <div className='grid lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 md:grid-rows-5 grid-cols-1 grid-rows-9 gap-4 mx-5'>
        {pokemonList.map((item) => (
          <PokemonCard pokemon={item}></PokemonCard>
        ))}
      </div>
    </div>
  );
};
export default Pokedex;
