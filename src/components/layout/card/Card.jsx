/* eslint-disable jsx-a11y/anchor-is-valid */
import { PencilIcon, RefreshIcon } from "@heroicons/react/solid";
import LukeImg from "../../../images/characters/1.jpg";

const people = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    birth_year: "19BBY",
    gender: "male",
    imageUrl: "../../images/characters/1.jpg",
    starships: [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/",
    ],
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    birth_year: "41.9BBY",
    gender: "male",
    imageUrl: "../../images/characters/1.jpg",
    starships: ["https://swapi.dev/api/starships/13/"],
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    birth_year: "19BBY",
    gender: "female",
    imageUrl: "../../images/characters/1.jpg",
    starships: [],
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    birth_year: "41.9BBY",
    gender: "male",
    imageUrl: "../../images/characters/1.jpg",
    starships: [
      "https://swapi.dev/api/starships/39/",
      "https://swapi.dev/api/starships/59/",
      "https://swapi.dev/api/starships/65/",
    ],
  },
  {
    name: "Han Solo",
    height: "180",
    mass: "80",
    birth_year: "29BBY",
    gender: "male",
    imageUrl: "../../images/characters/1.jpg",
    starships: [
      "https://swapi.dev/api/starships/10/",
      "https://swapi.dev/api/starships/22/",
    ],
  },
  {
    name: "Chewbacca",
    height: "228",
    mass: "112",
    birth_year: "200BBY",
    gender: "male",
    imageUrl: "../../images/characters/1.jpg",
    starships: [
      "https://swapi.dev/api/starships/10/",
      "https://swapi.dev/api/starships/22/",
    ],
  },
];

export default function Card() {
  return (
    <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {people.map((person) => (
        <>
          <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
            <div className='min-h-80 lg:aspect-square aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
              <img
                src={LukeImg}
                alt='Front of men&#039;s Basic Tee in black.'
                className='h-full w-full object-cover object-center lg:h-full lg:w-full'
              />
            </div>
            <div className='border-y border-gray-200 px-4 py-5 sm:px-6'>
              <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                <div className='sm:col-span-1'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Full name
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900'>{person.name}</dd>
                </div>
                <div className='sm:col-span-1'>
                  <dt className='text-sm font-medium text-gray-500'>Height</dt>
                  <dd className='mt-1 text-sm text-gray-900'>
                    {person.height}
                  </dd>
                </div>
                <div className='sm:col-span-1'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Birth Year
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900'>
                    {person.birth_year}
                  </dd>
                </div>
                <div className='sm:col-span-1'>
                  <dt className='text-sm font-medium text-gray-500'>Weight</dt>
                  <dd className='mt-1 text-sm text-gray-900'>{person.mass}</dd>
                </div>
                <div className='sm:col-span-1'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Starships Piloted
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900'>
                    {person.starships.length}
                  </dd>
                </div>
                <div className='sm:col-span-1'>
                  <dt className='text-sm font-medium text-gray-500'>Gender</dt>
                  <dd className='mt-1 text-sm text-gray-900'>
                    {person.gender}
                  </dd>
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
        </>
      ))}
    </ul>
  );
}
