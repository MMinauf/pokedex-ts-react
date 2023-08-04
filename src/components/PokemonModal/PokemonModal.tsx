import React from 'react';
import { Pokemon } from '../types/Pokemon';
import PokemonCard from '../PokemonCard/PokemonCard';
import { pokemonTypes } from '../../pokemonTypes';
import { ReactComponent as WeightIcon } from '../../assets/icon-weight.svg';
import { ReactComponent as RulerIcon } from '../../assets/icon-ruler.svg';
import { ReactComponent as BoltIcon } from '../../assets/icon-bolt.svg';
import PokemonType from '../PokemonType/PokemonType';
import { ReactComponent as CloseIcon } from '../../assets/icon-close.svg';

type PokemonModalProps = {
  setModal: (value: boolean) => void;
  pokemon: Pokemon;
};

const PokemonModal: React.FC<PokemonModalProps> = ({ setModal, pokemon }) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

  const [{ color }] = pokemonTypes.filter(
    (type) => pokemon.types[0].type.name.indexOf(type.name) !== -1
  );

  const formatStatName = (statName: string) => {
    switch (statName) {
      case 'hp':
        return 'HP';
      case 'attack':
        return 'Attack';
      case 'defense':
        return 'Defense';
      case 'special-attack':
        return 'Sp. Atk';
      case 'special-defense':
        return 'Sp. Def';
      case 'speed':
        return 'Speed';
    }
  };

  const formatPokemonId = (id: number) => {
    if (id < 10) return `#00${id}`;
    else if (id >= 10 && id < 99) return `#0${id}`;
    else return `#${id}`;
  };
  return (
    <div className='fixed  inset-0 flex items-center justify-center z-50 bg-black bg-opacity-20 backdrop-blur-sm '>
      <div className='m-10 max-w-3xl   relative grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-2 bg-gray-800 p-6 rounded-2xl border border-orange-500 shadow-lg '>
        <button
          onClick={() => setModal(false)}
          className='absolute top-1 right-1'
        >
          <CloseIcon fill='border-orange-500'></CloseIcon>
        </button>
        <div className='flex flex-col items-center max-w-auto rounded-lg  bg-gray-800 '>
          <img
            className='w-[50%] mt-[-150px]'
            src={imgUrl}
            alt={pokemon.name}
          />

          <div className='w-full p-5 flex flex-col items-center'>
            <h5 className=' text-2xl font-bold tracking-tight text-white'>
              {formatPokemonId(pokemon.id)}
            </h5>
            <h1 className='mb-1 text-4xl font-bold tracking-tight text-white capitalize'>
              {pokemon.name}
            </h1>
            <div className='flex justify-center flex-wrap mt-2'>
              {pokemon.types.map(({ type }) => (
                <PokemonType key={type.name} type={type.name} />
              ))}
            </div>

            <div className='flex flex-row mt-2 w-full justify-center'>
              <div className='flex text-md text-white mr-2'>
                <WeightIcon></WeightIcon>
                <p className='ml-1'> {pokemon.weight / 10} kg</p>
              </div>
              <div className='flex text-md text-white'>
                <RulerIcon></RulerIcon>
                <p className='ml-1'> {pokemon.height / 10} m</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className='mb-4 text-2xl font-bold tracking-tight text-white'>
            Stats:
          </h2>
          <div className='grid grid-cols-1 grid-rows-6 gap-3 sm:gap-1'>
            {pokemon.stats.map(({ stat, base_stat }) => (
              <li className='grid grid-rows-1 grid-cols-12  text-white  items-center'>
                <p className='col-span-3'> {formatStatName(stat.name)}:</p>
                <span className='col-span-2'>{base_stat}</span>
                <div className='col-span-7 w-full bg-gray-700 rounded-full h-2.5'>
                  <div
                    className=' bg-orange-500 h-2.5 rounded-full'
                    style={{ width: `${(base_stat / 130) * 100}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PokemonModal;
