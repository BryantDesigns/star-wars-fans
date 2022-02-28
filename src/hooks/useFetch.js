import { useEffect, useState, useRef } from "react";

const useFetch = (initialURL, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchURL, setSearchURL] = useState(initialURL);
  const cache = useRef({});

  useEffect(() => {
    const setCache = ({url, json}) => {
      cache.current[url] = json;
    };
    const getCache = (url) => {
      if (url in cache.current) {
        return cache.current[url]
      }
    };
    const fetchData = async (url) => {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        setLoading(false);
        return { url, json };
      } catch (error) {
        setError(error);
      }
    };
    const cacheData = getCache(searchURL);
    if (cacheData) {
      setData(cacheData)
      return
    }
    if (!searchURL) return
    fetchData(searchURL).then(setCache);
  }, [searchURL, options]);
  return { data, error, loading, setSearchURL };
};

export default useFetch;
