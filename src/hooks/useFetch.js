import { useEffect, useState } from "react";

const useFetch = (initialURL, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchURL, setSearchURL] = useState(initialURL);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        console.log(url);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData(searchURL);
  }, [searchURL, options]);
  // Function to get new characters page
  const getPage = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };
  return { data, error, loading, setSearchURL, getPage };
};

export default useFetch;
