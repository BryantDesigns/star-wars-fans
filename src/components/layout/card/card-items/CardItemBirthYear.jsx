const CardItemBirthYear = ({birth_year}) => {
  return (
    <div className='sm:col-span-1'>
      <dt className='text-sm font-medium text-gray-500'>Birth Year</dt>
      <dd className='mt-1 text-sm text-gray-900'>{birth_year}</dd>
    </div>
  );
}

export default CardItemBirthYear