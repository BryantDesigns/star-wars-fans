const CardItemHeight = ({ height }) => {
  return (
    <div className='sm:col-span-1'>
      <dt className='text-sm font-medium text-gray-500'>Height</dt>
      <dd className='mt-1 text-sm text-gray-900'>{height}</dd>
    </div>
  );
};

export default CardItemHeight;