/* eslint-disable jsx-a11y/anchor-is-valid */
import CardItemImg from "./card-items/CardItemImg";
import CardItemName from "./card-items/CardItemName";
import CardItemHeight from "./card-items/CardItemHeight";
import CardItemBirthYear from "./card-items/CardItemBirthYear";
import CardItemWeight from "./card-items/CardItemWeight";
import CardItemStarships from "./card-items/CardItemStarships";
import CardItemGender from "./card-items/CardItemGender";
import ButtonContainer from "./ButtonContainer";

export default function CharacterCard({
  birth_year = "",
  height = "",
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
      className='cursor-pointer overflow-hidden bg-white shadow sm:rounded-lg'
    >
      <div className='border-y border-gray-200 px-4 py-5 sm:px-6'>
        <CardItemImg name={name} />
        <dl className='grid grid-cols-2 gap-x-4 gap-y-4 pt-5'>
          <CardItemName name={name} />
          <CardItemHeight height={height} />
          <CardItemBirthYear birth_year={birth_year} />
          <CardItemWeight mass={mass} />
          <CardItemStarships starships={starships} />
          <CardItemGender gender={gender} />
        </dl>
      </div>
      <ButtonContainer />
    </div>
  );
}
