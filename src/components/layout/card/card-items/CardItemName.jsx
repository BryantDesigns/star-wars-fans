const CardItemName = ({ name = "" }) => {
  return (
    <div className='sm:col-span-1'>
      <dt className='text-sm font-medium text-gray-500'>Full Name</dt>
      <dd className='text-md mt-1 whitespace-nowrap text-gray-900'>{name}</dd>
    </div>
  );
};

export default CardItemName;