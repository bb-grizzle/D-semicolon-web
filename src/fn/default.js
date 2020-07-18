import {
  useLayoutEffect,
  useState
} from 'react';

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;

}

export const makeCount = (count) => {
  if (count === 1) {
    return "1st";
  } else if (count === 2) {
    return "2nd";
  } else if (count === 3) {
    return "3rd";
  } else {
    return `${count}th`;
  }
};