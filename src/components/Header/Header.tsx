import React from 'react';
import { ReactComponent as PokemonLogo } from '/src/assets/logo-pokemon.svg';
import Socials from './Socials';

const Header = () => {
  return (
    <div className='flex justify-center bg-gradient-to-b from-orange-500 to-orange-600'>
      <div className='flex m-5 justify-between w-screen items-center max-w-screen-xl'>
        <PokemonLogo></PokemonLogo>
        <Socials></Socials>
      </div>
    </div>
  );
};

export default Header;
