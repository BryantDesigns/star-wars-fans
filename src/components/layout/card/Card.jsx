/* eslint-disable jsx-a11y/anchor-is-valid */
import { PencilIcon, RefreshIcon } from "@heroicons/react/solid";
import LukeImg from "../../../images/characters/1.jpg";

export default function CharacterCard({
  birth_year = "",
  height = "",
  films = [],
  gender = "",
  name = "",
  starships = [],
  mass = "",
  url = "",
}) {
  return (
      <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
        <div className='min-h-80 lg:aspect-square aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
          <img
            src={LukeImg}
            alt={name}
            className='h-full w-full object-cover object-center lg:h-full lg:w-full'
          />
        </div>
        <div className='border-y border-gray-200 px-4 py-5 sm:px-6'>
          <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Full name</dt>
              <dd className='mt-1 text-sm text-gray-900'>{name}</dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Height</dt>
              <dd className='mt-1 text-sm text-gray-900'>{height}</dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Birth Year</dt>
              <dd className='mt-1 text-sm text-gray-900'>{birth_year}</dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Weight</dt>
              <dd className='mt-1 text-sm text-gray-900'>{mass}</dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>
                Starships Piloted
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>{starships.length}</dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Gender</dt>
              <dd className='mt-1 text-sm text-gray-900'>{gender}</dd>
            </div>
          </dl>
        </div>
        <div className='-mt-px flex divide-x divide-gray-200'>
          <div className='flex w-0 flex-1'>
            <button className='relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-stardata'>
              <PencilIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
              <span className='ml-3'>Edit</span>
            </button>
          </div>
          <div className='-ml-px flex w-0 flex-1'>
            <button className='relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-stardata'>
              <RefreshIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
              <span className='ml-3'>See More</span>
            </button>
          </div>
        </div>
      </div>
  );
}
