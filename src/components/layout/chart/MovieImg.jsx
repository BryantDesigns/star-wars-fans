const MovieImg = ({ title = "" }) => {
  return (
    <div className='overflow-hidden shadow-sm shadow-gray-400 group-hover:opacity-75'>
      <img
        src={`https://res.cloudinary.com/bryant-designs/image/upload/v1645999617/films/${title}.jpg`}
        alt={title}
        className=' h-full w-full object-contain object-center'
      />
    </div>
  );
};

export default MovieImg;
