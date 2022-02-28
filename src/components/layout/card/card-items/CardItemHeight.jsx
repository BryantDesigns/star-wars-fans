import {toFeet} from "../../../../utilities/helpers";
const CardItemHeight = ({ height = "" }) => {
  return (
    <div className='text-right sm:col-span-1'>
      <dt className='text-sm font-medium text-gray-500'>Height</dt>
      <dd className='text-md mt-1 text-gray-900'>{toFeet(height)}</dd>
    </div>
  );
};

export default CardItemHeight;