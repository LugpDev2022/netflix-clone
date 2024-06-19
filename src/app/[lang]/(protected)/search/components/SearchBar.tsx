import { HiMagnifyingGlass } from 'react-icons/hi2';
import { RxCross1 } from 'react-icons/rx';

//TODO:Update color scheme
const SearchBar = () => {
  return (
    <div className='w-full relative text-white mt-2.5'>
      <label htmlFor='' className='absolute top-1/2 -translate-y-1/2 left-6'>
        <HiMagnifyingGlass size={24} />
      </label>
      <input
        type='text'
        className='w-full h-14 bg-white/70 rounded-md pl-[56px] pe-[52px] outline-none'
        placeholder='Find movies and series'
      />

      <button
        type='reset'
        className='absolute top-1/2 -translate-y-1/2 right-6'
      >
        <RxCross1 size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
