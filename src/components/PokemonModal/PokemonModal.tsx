import React from 'react';
import { Pokemon } from '../types/Pokemon';
import PokemonCard from '../PokemonCard/PokemonCard';

type PokemonModalProps = {
  setModal: (value: boolean) => void;
};

const PokemonModal: React.FC<PokemonModalProps> = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-20 backdrop-blur-sm'>
      <div className='bg-white p-6 rounded-lg shadow-lg'>
        <p>This is the modal content.</p>
        <button className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
          Close Modal
        </button>
      </div>
    </div>
  );
};
export default PokemonModal;
