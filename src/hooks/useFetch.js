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
  return { data, error, loading, setSearchURL};
};

export default useFetch;
