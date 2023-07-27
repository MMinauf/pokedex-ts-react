import React from 'react';
import { ReactComponent as HomeIcon } from '../../assets/icon-home.svg';

type HomeButtonProps = {
  onClick: () => void;
};

const HomeButton: React.FC<HomeButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className=' bg-orange-700 flex  flex-shrink-0 justify-center   text-white capitalize font-bold text-md items-center px-4 py-4 rounded-lg font-sans mb-2'
    >
      <HomeIcon></HomeIcon>
      <p className='ml-1'> Reset</p>
    </button>
  );
};
export default HomeButton;
