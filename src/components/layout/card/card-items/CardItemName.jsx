const CardItemName = ({ name }) => {
  return (
    <div className='sm:col-span-1'>
      <dt className='text-sm font-medium text-gray-500'>Full name</dt>
      <dd className='mt-1 text-sm text-gray-900'>{name}</dd>
    </div>
  );
};

export default CardItemName;