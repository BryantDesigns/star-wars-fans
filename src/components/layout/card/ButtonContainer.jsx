import EditButton from "./card-items/EditButton";
import SeeMoreButton from "./card-items/SeeMoreButton";

const ButtonContainer = () => {
  return (
    <div className='-mt-px flex divide-x divide-gray-200'>
      <div className='flex w-0 flex-1'>
        <EditButton />
      </div>
      <div className='-ml-px flex w-0 flex-1'>
        <SeeMoreButton />
      </div>
    </div>
  );
}

export default ButtonContainer