const CardItemWeight = ({mass}) => {
  return (
    <div className='sm:col-span-1'>
      <dt className='text-sm font-medium text-gray-500'>Weight</dt>
      <dd className='mt-1 text-sm text-gray-900'>{mass}</dd>
    </div>
  );
}

export default CardItemWeight