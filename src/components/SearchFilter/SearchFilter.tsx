import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';

type SearchFilterProps = {
  onSubmit: () => void;
};

const SearchFilter: React.FC<SearchFilterProps> = ({ onSubmit }) => {
  return (
    <form className='md:col-span-4 md:ml-3 '>
      <label className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <SearchIcon></SearchIcon>
        </div>
        <input
          type='search'
          id='search'
          className='block w-full p-5 pl-10 text-sm  rounded-lg   bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500
          '
          placeholder='Search'
        />
        <button
          type='submit'
          className='text-white absolute right-2.5 bottom-2.5 bg-orange-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'
        >
          Search
        </button>
      </div>
    </form>
  );
};
export default SearchFilter;
