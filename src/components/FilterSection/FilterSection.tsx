import React from 'react';
import HomeButton from '../HomeButton/HomeButton';
import TypeFilter from '../TypeFilter/TypeFilter';
import SearchFilter from '../SearchFilter/SearchFilter';

type FilterSectionProps = {
  setTypeFilter: (data: string) => void;
};

const FilterSection = ({ setTypeFilter }: FilterSectionProps) => {
  return (
    <div className='flex justify-center bg-gradient-to-b from-red-800 to-red-950'>
      <div className='mx-5 w-screen  max-w-screen-xl mb-4'>
        <HomeButton onClick={() => console.log('first')}></HomeButton>

        <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-6 md:grid-rows-1 items-end justify-between'>
          <TypeFilter setTypeFilter={setTypeFilter}></TypeFilter>
          <SearchFilter onSubmit={() => console.log('first')}></SearchFilter>
        </div>
      </div>
    </div>
  );
};
export default FilterSection;
