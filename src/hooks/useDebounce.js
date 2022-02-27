import { useEffect, useState } from "react";

/**
 * debounces a value
 * @param {((prevState: any) => any)} setStateCallback - a callback function or a setState function
 * @param {number} [debounceTime] - debounce time is ms
 * @returns {{setSearchValue: ((prevState: any) => any)}} - a setState function to update state
 */
const useDebounce = (setStateCallback, debounceTime = 250) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let timerId = null;

    timerId = setTimeout(() => {
      setStateCallback(searchValue);
      timerId = null;
    }, debounceTime);
    return () => clearTimeout(timerId);
  }, [searchValue, debounceTime, setStateCallback]);

  return { setSearchValue };
};

export default useDebounce;
