const MovieImg = ({ title }) => {
  return (
    <div className='min-h-80 lg:aspect-auto aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md group-hover:opacity-75 lg:h-96'>
      <img
        src={`https://res.cloudinary.com/bryant-designs/image/upload/v1645999617/films/${title}.jpg`}
        alt={title}
        className='h-full w-full object-cover object-center'
      />
    </div>
  );
};

export default MovieImg;
