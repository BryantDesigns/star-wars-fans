import CharacterCard from "./CharacterCard";

const MappedCharacterCards = ({ data = null, setSearchURL = () => {} }) => {
  if (data === null) {
    return null;
  }
  if (data.results) {
    return (
      <>
        {data?.results?.map(
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
                setSearchURL={setSearchURL}
              />
            );
          }
        )}
      </>
    );
  }
  if (data.name) {
    return (
      <>
        {data?.name && (
          <CharacterCard
            birth_year={data.birth_year}
            height={data.height}
            films={data.films}
            gender={data.gender}
            starships={data.starships}
            mass={data.mass}
            name={data.name}
            url={data.url}
          />
        )}
      </>
    );
  }
};

export default MappedCharacterCards;
