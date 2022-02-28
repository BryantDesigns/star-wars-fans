import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { PEOPLE_BY_PAGE, PEOPLE_PAGE_ONE } from "../../../constants/constants";
const Pagination = ({ data = {}, setSearchURL = () => {} }) => {
  function countNumPages(data) {
    if(!data) return
    return Math.ceil(data.count / 10)
  }
  return (
    <div className='flex justify-center pb-6'>
      {data && (data.next || data.previous) ? (
        <span className='relative z-0 inline-flex rounded-md shadow-sm'>
          <button
            disabled={!data.previous}
            onClick={() => setSearchURL(data.previous)}
            type='button'
            className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-stardata-500 focus:outline-none focus:ring-1 focus:ring-stardata-500'
          >
            <span className='sr-only'>Previous</span>
            <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
            Previous Page
          </button>
          {data?.count &&
            Array(countNumPages(data)).fill(0).map((_, index) => {
              return (
                <button
                  key={PEOPLE_BY_PAGE + (index + 1)}
                  onClick={() => setSearchURL(PEOPLE_BY_PAGE + (index + 1))}
                  type='button'
                  className='relative inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-stardata-500 focus:outline-none focus:ring-1 focus:ring-stardata-500'
                >
                  <span className='sr-only'>Page: {index + 1}</span>
                  {index + 1}
                </button>
              );
            })}
          <button
            disabled={!data.next}
            onClick={() => setSearchURL(data.next)}
            type='button'
            className='relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-stardata-500 focus:outline-none focus:ring-1 focus:ring-stardata-500'
          >
            Next Page
            <span className='sr-only'>Next</span>
            <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
          </button>
        </span>
      ) : (
        <button
          onClick={() => setSearchURL(PEOPLE_PAGE_ONE)}
          type='button'
          className='relative -ml-px inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-stardata-500 focus:outline-none focus:ring-1 focus:ring-stardata-500'
        >
          <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
          Go Back
        </button>
      )}
    </div>
  );
};

export default Pagination;
