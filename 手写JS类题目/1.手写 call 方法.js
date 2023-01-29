Function.prototype.myCall = function (context, ...args) {
  // 如果call方法的第一个参数为 null 或 undefined，则this指向全局
  context = context === null || context === undefined ? window : thisArg;
  // context 身上挂载一个原函数
  // 原函数调用的 call 方法，所以这里的 this 就是原函数
  context._fn = this;
  // 调用的是 context 身上的 _fn 从而实现了调用 _fn 函数的this指向的是传入 call 方法的第一个参数
  let res = thisArg._fn(...args);
  // 删除挂载的属性
  delete context._fn;
  // 返回函数结果
  return res;
};
