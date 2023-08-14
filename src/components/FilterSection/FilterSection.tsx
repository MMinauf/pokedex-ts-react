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
      <div className='m-5 w-screen  max-w-screen-xl '>
        <HomeButton onClick={() => console.log('first')}></HomeButton>
        <TypeFilter setTypeFilter={setTypeFilter}></TypeFilter>
        <SearchFilter onSubmit={() => console.log('first')}></SearchFilter>
      </div>
    </div>
  );
};
export default FilterSection;
