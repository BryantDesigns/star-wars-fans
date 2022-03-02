import NotTheDroids from '../../../assets/images/NotTheDroids.png'

const NoCharacterFound = () => {
  return (
    <div className='h-100 w-100 col-span-full mx-auto text-center'>
      <h2 className='py-4 text-2xl'>No Characters Were Found</h2>
      <img className='' alt='These are not the droids' src={NotTheDroids}></img>
    </div>
  );
}

export default NoCharacterFound