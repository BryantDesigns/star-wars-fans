import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        console.log(json)
        setLoading(false)
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { response, error, loading };
};

export default useFetch;
