import React from 'react';
import { ReactComponent as DividerFire } from '/src/assets/divider-fire.svg';
import PokemonType from '../PokemonType/PokemonType';

const HeroSection = () => {
  return (
    <div className='flex justify-center bg-gradient-to-b from-orange-600 to-red-800'>
      <div className='flex flex-col sm:flex-row m-5 justify-between w-screen items-center  max-w-screen-xl'>
        <div className='flex flex-col'>
          <span className='mb-1 font-sans text-2xl font-bold text-white'>
            #025
          </span>
          <div className='flex'>
            <PokemonType type='electric'></PokemonType>
            <PokemonType type='ground'></PokemonType>
          </div>
          <h1 className='font-sans text-7xl text-white font-bold mb-2'>
            PIKACHU
          </h1>
          <p className='text-white font-sans max-w-md'>
            Pikachu is a short, chubby rodent Pokémon. It is covered in yellow
            fur with two horizontal brown stripes on its back. It has a small
            mouth, long, pointed ears with black tips, and brown eyes. Each
            cheek is a red circle that contains a pouch for electricity storage.
          </p>
        </div>

        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png'></img>
      </div>
    </div>
  );
};

export default HeroSection;
