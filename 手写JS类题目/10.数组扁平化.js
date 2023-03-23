const arr = [1, 2, [3, 4], [5, 6, [7, 8]]];

const flat = (arr, initVal) => {
  let startVal = initVal || [];

  return arr.reduce((preVal, curVal) => {
    if (Array.isArray(curVal)) {
      return flat(curVal, preVal);
    } else {
      return preVal.concat(curVal);
    }
  }, startVal);
};

console.log(flat(arr));
