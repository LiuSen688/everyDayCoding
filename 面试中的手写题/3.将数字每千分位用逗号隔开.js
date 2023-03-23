// 12323.33  => 12,323.33

function format(n) {
  let num = n.toString();
  let intPart = "";
  let decimals = "";
  if (num.indexOf(".") != -1) {
    intPart = num.split(".")[0];
    decimals = num.split(".")[1];
  } else {
    intPart = num;
  }

  let count = 0;
  let res = [];
  for (let i = intPart.length - 1; i >= 0; i--) {
    count++;
    if (count < 4) {
      res.unshift(intPart[i]);
    } else {
      // 千分位置推入 逗号 之后，记得继续追加当前遍历项
      res.unshift(",");
      res.unshift(intPart[i]);
      // 更新计数器
      // 因为上面已经推入了一个当前遍历项了，所以更新计数器为 1
      count = 1;
    }
  }
  return decimals.length == 0 ? res.join("") : res.join("") + "." + decimals;
}

console.log(format(12323678.33));
