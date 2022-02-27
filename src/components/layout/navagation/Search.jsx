import { useRef } from "react";
import { PEOPLE_SEARCH_URL } from "../../../constants/constants";
import useDebounce from "../../../hooks/useDebounce";
import { SearchIcon } from "@heroicons/react/solid";

const Search = ({ setSearchURL = () => {} }) => {
  const { setSearchValue } = useDebounce(setSearchURL, 400);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const { value } = event.target;
    if (!value) {
      setSearchValue("");
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
            <SearchIcon
              className='h-5 w-5 text-gray-400 focus:text-white'
              aria-hidden='true'
            />
          </div>
          <input
            id='search'
            name='search'
            type='search'
            onChange={handleChange}
            ref={inputRef}
            className='block w-full rounded-md border border-transparent bg-gray-800 py-2 pl-10 pr-3 leading-5 text-gray-400 placeholder-gray-400 focus:border-white focus:bg-stardata focus:text-white focus:outline-none focus:ring-white sm:text-sm'
            placeholder='Search Characters'
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
