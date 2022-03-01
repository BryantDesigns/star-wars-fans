import loading from '../../assets/images/loading.gif'
const Loading = () => {
  return (
    <div className=' flex h-screen w-screen bg-black'>
      <img src={loading} className='object-contain' alt='loading' />
    </div>
  );
};

export default Loading;
