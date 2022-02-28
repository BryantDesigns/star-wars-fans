import { toPounds } from "../../../../utilities/helpers";
const CardItemWeight = ({ mass = "" }) => {
  return (
    <div className='sm:col-span-1 text-right'>
      <dt className='text-sm font-medium text-gray-500'>Weight</dt>
      <dd className='text-md mt-1  text-gray-900'>{toPounds(mass)}lbs</dd>
    </div>
  );
};

export default CardItemWeight