/* This example requires Tailwind CSS v2.0+ */
import FilmChart from "./FilmChart";
import MovieImg from "./MovieImg";
import useFetch from "../../../hooks/useFetch";



export default function ChartSection() {
  const { data } = useFetch("https://swapi.dev/api/films/"); 
  return (
    <div className='my-6 rounded-lg bg-gray-100 py-6 px-5 shadow sm:px-6'>
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
        <FilmChart data={data} />
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
            {data?.results?.map(({ title, characters }) => (
              <div key={title} className='pt-6'>
                <div className='flow-root rounded-lg pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <MovieImg title={title} />
                    </div>
                    <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                      {title}
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>Characters: {characters.length}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
