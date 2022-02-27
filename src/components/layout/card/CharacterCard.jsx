/* eslint-disable jsx-a11y/anchor-is-valid */
import CardItemImg from "./card-items/CardItemImg";
import CardItemName from "./card-items/CardItemName";
import CardItemHeight from "./card-items/CardItemHeight";
import CardItemBirthYear from './card-items/CardItemBirthYear'
import CardItemWeight from "./card-items/CardItemWeight";
import CardItemStarships from "./card-items/CardItemStarships";
import CardItemGender from "./card-items/CardItemGender";
import EditButton from "./card-items/EditButton";
import SeeMoreButton from "./card-items/SeeMoreButton";

export default function CharacterCard({
  birth_year = "",
  height = "",
  films = [],
  gender = "",
  name = "",
  starships = [],
  mass = "",
  url = "",
  setSearchURL = () => {},
}) {
  return (
    <div
      onClick={() => setSearchURL(url)}
      className='overflow-hidden bg-white shadow sm:rounded-lg'
    >
      <div className='border-y border-gray-200 px-4 py-5 sm:px-6'>
      <CardItemImg name={name} />
        <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
          <CardItemName name={name} />
          <CardItemHeight height={height} />
          <CardItemBirthYear birth_year={birth_year} />
          <CardItemWeight mass={mass} />
          <CardItemStarships starships={starships} />
          <CardItemGender gender={gender} />
        </dl>
      </div>
      <div className='-mt-px flex divide-x divide-gray-200'>
        <div className='flex w-0 flex-1'>
          <EditButton />
        </div>
        <div className='-ml-px flex w-0 flex-1'>
          <SeeMoreButton />
        </div>
      </div>
    </div>
  );
}
