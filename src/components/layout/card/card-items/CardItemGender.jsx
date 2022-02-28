const CardItemGender = ({ gender = "" }) => {
  return (
    <div className='sm:col-span-1 text-right'>
      <dt className='text-sm font-medium text-gray-500'>Gender</dt>
      <dd className='text-md mt-1 text-gray-900'>{gender}</dd>
    </div>
  );
};

export default CardItemGender;
