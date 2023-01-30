let obj = {
  a: 1,
  b: 2,
  c: {
    c: 1,
    d: 2,
  },
};

let obj2 = [1, 2, 3, { a: 1, B: 2 }, "haha"];

function deepClone(obj) {
  // 判断参数是否为数组和对象，如果不是数组或者对象则直接return
  // 其实这就是递归深拷贝的递归结束条件
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  let result;
  // 预先判断形参的数据类型并初始化
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }
  // 遍历键名，通过键名获取数组和对象的值
  for (let key in obj) {
    // 过滤掉非自身属性以为的其他属性
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}

console.log(deepClone(obj2));
