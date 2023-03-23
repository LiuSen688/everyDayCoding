// 输入
let testObj = {
  nio: {
    xpev: {
      li: 1,
    },
    byd: [1, 2],
  },
  tsla: 3,
};

// 输出
// {
//     nio_xpev_li: 1,
//     nio_byd: [1,2],
//     tsla: 3
// }

// 递归写法
function translate(testObj) {
  let res = {};
  Object.keys(testObj).forEach((key) => {
    let tmpObj = testObj[key];
    backtrack(res, tmpObj, key);
  });

  function backtrack(res, obj, keyStr) {
    // 递归结束条件
    if (obj.constructor != Object) {
      res[keyStr] = obj;
      return;
    }
    // 单层递归逻辑
    Object.keys(obj).forEach((key) => {
      let tmpObj = obj[key];
      keyStr += `_${key}`;
      backtrack(res, tmpObj, keyStr);
    });
  }
  console.log(res);
  return res;
}

// translate(testObj);

const res = {};
const tmpArr = [];
const reWrite = (testObj) => {
  Object.keys(testObj).forEach((key) => {
    let tmpObj = testObj[key];
    backtrack(key, tmpObj);
    tmpArr.pop();
  });
  function backtrack(key, obj) {
    tmpArr.push(key);
    // 递归结束条件
    if (obj.constructor != Object) {
      let tmpStr = tmpArr.join("_");
      res[tmpStr] = obj;
      return;
    }
    Object.keys(obj).forEach((key) => {
      let tmpObj = obj[key];
      backtrack(key, tmpObj);
      tmpArr.pop();
    });
  }
  console.log(res);
  return res;
};

reWrite(testObj);
