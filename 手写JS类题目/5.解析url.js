let url = "http://www.domain.com/?user=jack&id=123&id=456&city=北京";

// 实现一个函数： parseParam
// 输入解析后的结果为:

// {
//   user: 'jack',
//   id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
//   city: '北京', // 中文需解码
//   enabled: true, // 未指定值得 key 约定为 false
// }

function parseParam(url) {
  const resObj = {};
  const splitArray = url.split("?")[1].toString();
  const firstArray = splitArray.split("&"); // user=jack
  firstArray.forEach((item) => {
    const itemSplitArray = item.split("=");
    // 左边
    const leftArray = itemSplitArray[0];
    // 右边
    const rightArray = itemSplitArray[1];
    // 如果已经有该属性了
    if (resObj[leftArray]) {
      // 转成数组
      resObj[leftArray] = [resObj[leftArray]];
      // 数组中存入新值
      resObj[leftArray].push(rightArray);
    }
    // 没有该属性
    else {
      resObj[itemSplitArray[0]] = itemSplitArray[1];
    }
  });
  return resObj;
}

console.log(parseParam(url));
