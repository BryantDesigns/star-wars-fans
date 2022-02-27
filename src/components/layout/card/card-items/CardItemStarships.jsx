const CardItemStarships = ({ starships }) => {
  return (
    <div className='sm:col-span-1'>
      <dt className='text-sm font-medium text-gray-500'>Starships Piloted</dt>
      <dd className='mt-1 text-sm text-gray-900'>{starships.length}</dd>
    </div>
  );
};

export default CardItemStarships;
