const Container = ({children}) => {
  return (
    <div className='mx-auto pb-12 mt-6'>
      <div className='rounded-lg bg-gray-200 px-5 py-6 shadow sm:px-6'>
        <div className='cursor-pointer overflow-hidden bg-white shadow sm:rounded-lg'>
          <div className='border-y border-gray-200 px-4 py-5 sm:px-6'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container