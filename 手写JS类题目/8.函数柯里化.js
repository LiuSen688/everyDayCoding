function addCurry() {
  let arr = [...arguments];
  let fn = function () {
    if (arguments.length === 0) {
      return arr.reduce((a, b) => {
        return a + b;
      });
    }else {
        arr.push(...arguments);
        return fn;
    }
  };
  return fn;
}


console.log(addCurry(1)(2)(3)(4)());
