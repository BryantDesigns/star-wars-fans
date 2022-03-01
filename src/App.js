import Navbar from "./components/layout/navagation/Navbar";
import Footer from "./components/layout/footer/Footer";
import useFetch from "./hooks/useFetch";
import ChartSection from "./components/layout/chart/ChartSection";
import Pagination from "./components/layout/navagation/Pagination";
import Header from "./components/layout/header/Header";
import { PEOPLE_PAGE_ONE } from "./constants/constants";
import MappedCharacterCards from "./components/layout/card/MappedCharacterCards";

export default function App() {
  const { data, setSearchURL } = useFetch(PEOPLE_PAGE_ONE);
  
  return (
    <>
      <div className='relative min-h-full bg-gradient-to-t from-black via-gray-700 to-gray-200 mt-16'>
        <Header>
          <Navbar setSearchURL={setSearchURL} />
        </Header>

        <main className='-mt-32'>
          <div className='mx-auto px-4 pb-12 sm:px-6 lg:px-8'>
            <div className='rounded-lg bg-gray-200 px-5 py-6 shadow sm:px-6'>
              <Pagination data={data} setSearchURL={setSearchURL} />
              <section className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
                <MappedCharacterCards data={data} setSearchURL={setSearchURL} />
              </section>
            </div>
            <ChartSection />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
