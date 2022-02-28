import { RefreshIcon } from "@heroicons/react/solid";

const SeeMoreButton = () => {
  return (
    <button className='relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 duration-300 ease-in-out hover:bg-stardata hover:text-white'>
      <RefreshIcon className='h-5 w-5' aria-hidden='true' />
      <span className='ml-3'>See More</span>
    </button>
  );
};

export default SeeMoreButton;
