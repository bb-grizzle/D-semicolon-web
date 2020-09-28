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

export const fullHeight = () => {
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
}

export const preventScroll = () => {
  document.body.style.height = "100vh";
  document.body.style.overflow = "hidden";

}


export const activeScroll = () => {
  document.body.style.height = "initial";
  document.body.style.overflow = "auto";
}



export const arrayReverseObj = (obj) => {
  let newArray = []

  Object.keys(obj)
    .sort()
    .reverse()
    .forEach(key => {
      console.log(key)
      newArray.push({
        'grade': key,
        'data': obj[key]
      })
    })

  return newArray
}

export const checkObjectContain = (arr, obj) => {
  return arr.some((item) => shallowEqual(item, obj));
};

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  for (let key of keys1) {
    for (let key2 of keys2) {
      if (object1[key] === object2[key2]) {
        return true;
      }
    }
  }

  return false;
}