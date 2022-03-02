import { useRef } from "react";
import { PEOPLE_PAGE_ONE, PEOPLE_SEARCH_URL } from "../../../constants/constants";
import useDebounce from "../../../hooks/useDebounce";
import { SearchIcon } from "@heroicons/react/solid";

const Search = ({ setSearchURL = () => {} }) => {
  const { setSearchValue } = useDebounce(setSearchURL, 400);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const { value } = event.target;
    if (!value) {
      setSearchValue(PEOPLE_PAGE_ONE);
    } else {
      setSearchValue(PEOPLE_SEARCH_URL + value);
    }
  };

  return (
    <div className='flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end'>
      <div className='w-full max-w-lg lg:max-w-xs'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <div className='relative'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <SearchIcon className='h-5 w-5 text-gray-200' aria-hidden='true' />
          </div>
          <input
            id='search'
            name='search'
            type='search'
            onChange={handleChange}
            ref={inputRef}
            className='block w-full rounded-md border border-transparent bg-stardata py-2 pl-10 pr-3 leading-5 text-gray-200 placeholder-gray-200 focus:border-white focus:outline-none focus:ring-2 focus:bg-stardata-600 focus:ring-stardata focus:ring-offset-2 focus:ring-offset-stardata-600 sm:text-sm'
            placeholder='Search Characters'
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
