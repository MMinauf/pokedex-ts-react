import React from 'react';
import { pokemonTypes } from '../../pokemonTypes';
import { ReactComponent as BoltIcon } from '../../assets/icon-bolt.svg';

type MoreDetailsProps = {
  type: string;
  onClick: () => void;
};

const MoreDetails: React.FC<MoreDetailsProps> = ({ type, onClick }) => {
  const [{ color }] = pokemonTypes.filter((item) => item.name === type);
  return (
    <button
      onClick={onClick}
      className='flex flex-shrink-0 justify-center   text-white capitalize font-bold text-md items-center px-2 py-4 rounded-lg font-sans mt-3'
      style={{
        backgroundColor: color,
      }}
    >
      <BoltIcon></BoltIcon>
      <p className='ml-1'> More Details</p>
    </button>
  );
};
export default MoreDetails;
