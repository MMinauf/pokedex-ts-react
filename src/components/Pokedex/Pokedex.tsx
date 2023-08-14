import React from 'react';
import { Pokemon } from '../types/Pokemon';
import PokemonCard from '../PokemonCard/PokemonCard';
import Spinner from '../Spinner/Spinner';

type PokedexProps = {
  pokemonList: Pokemon[];
  setModal: (value: boolean) => void;
  setPokemonData: (data: Pokemon) => void;
  isFetching: boolean;
  setLoading: (value: boolean) => void;
};

const Pokedex: React.FC<PokedexProps> = ({
  pokemonList,
  setModal,
  setPokemonData,
  isFetching,
  setLoading,
}: PokedexProps) => {
  return (
    <div className='flex justify-center bg-gradient-to-b from-red-950 to-black '>
      <div className='mx-5 flex flex-row flex-wrap  justify-center w-screen items-center  max-w-screen-xl'>
        <div className='grid grid-cols-max lg:grid-cols-3 lg:grid-rows-3 sm:grid-cols-2 sm:grid-rows-5 grid-cols-1 grid-rows-9 gap-5 '>
          {isFetching ? (
            <Spinner />
          ) : (
            pokemonList.map((item) => (
              <PokemonCard
                key={item.id}
                setModal={setModal}
                pokemon={item}
                setPokemonData={setPokemonData}
              ></PokemonCard>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Pokedex;
