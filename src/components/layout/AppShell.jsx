import Navbar from "./navagation/Navbar";
import CharacterCard from "./card/Card";
import Footer from "./footer/Footer";
import useFetch from "../../hooks/useFetch";

export default function AppShell() {
  const { response, error, loading } = useFetch(
    "https://swapi.dev/api/people/"
  );

  return (
    <>
      <div className='min-h-full bg-gradient-to-t from-black via-gray-900 to-gray-700'>
        <div className='bg-[url("https://images.unsplash.com/photo-1532793218979-f3365c284b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80")] bg-cover bg-center pb-32'>
          <Navbar />
          <header className='py-10'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <h1 className='text-3xl font-bold text-white'>
                Star Wars Characters
              </h1>
            </div>
          </header>
        </div>

        <main className='-mt-32'>
          <div className='mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8'>
            <div className='rounded-lg bg-gray-100 px-5 py-6 shadow sm:px-6'>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {response?.results?.map(
                  ({
                    birth_year = "",
                    height = "",
                    films = [],
                    gender = "",
                    name = "",
                    starships = [],
                    mass = "",
                    url = "",
                  }) => {
                    return (
                      <CharacterCard
                        key={name + birth_year}
                        birth_year={birth_year}
                        height={height}
                        films={films}
                        gender={gender}
                        starships={starships}
                        mass={mass}
                        name={name}
                        url={url}
                      />
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
