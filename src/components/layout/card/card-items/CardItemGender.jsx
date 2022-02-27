const CardItemGender = ({ gender }) => {
  return (
    <div className='sm:col-span-1'>
      <dt className='text-sm font-medium text-gray-500'>Gender</dt>
      <dd className='mt-1 text-sm text-gray-900'>{gender}</dd>
    </div>
  );
};

export default CardItemGender;
