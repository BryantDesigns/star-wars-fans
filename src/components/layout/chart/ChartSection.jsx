/* This example requires Tailwind CSS v2.0+ */
import FilmChart from "./FilmChart";
import MovieImg from "./MovieImg";
import useFetch from "../../../hooks/useFetch";
import Container from "../Container";

export default function ChartSection() {
  const { data } = useFetch("https://swapi.dev/api/films/");
  return (
    <>
      <Container>
        <FilmChart data={data} />
        <div className='mt-8 text-center'>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-4'>
            {data?.results?.map(({ title, characters }) => (
              <div key={crypto.randomUUID()} className='pt-6'>
                <div className='flow-root rounded-lg pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <MovieImg title={title} />
                    </div>
                    <h3 className='mt-4 text-lg font-medium tracking-tight text-gray-900'>
                      {title}
                    </h3>
                    <p className='mt-2 text-base text-gray-500'>
                      Characters: {characters.length}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
