Function.prototype.myBind = function (context, ...args1) {
  // 如果第一个参数是 null 或者 undefined 时，指向全局变量
  context = context === undefined || context === null ? window : context;
  let _this = this;
  // bind 方法返回一个函数
  return function (...args2) {
    // context 身上挂载一个原函数
    // 原函数调用的 call 方法，所以这里的 this 就是原函数
    context._fn = _this;
    // 调用的是 context 身上的 _fn 从而实现了调用 _fn 函数的this指向的是传入 call 方法的第一个参数
    // 整合传入 bind 方法的参数和调用返回函数时传入的参数
    let res = context._fn(...[...args1, ...args2]);
    delete context._fn;
    return res;
  };
};
