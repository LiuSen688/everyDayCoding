Function.prototype.myApply = function (context, arg) {
// 如果第一个参数是 null 或者 undefined 时，指向全局变量
  context = context === null || context === undefined ? window : context;
  // context 身上挂载一个原函数
  // 原函数调用的 call 方法，所以这里的 this 就是原函数
  context._fn = this;
  // 第二个参数必须是数组或者类数组，否则重置成数组
  arg = Array.isArray(arg) ? arg : [];
  // 调用的是 context 身上的 _fn 从而实现了调用 _fn 函数的this指向的是传入 call 方法的第一个参数
  let res = context._fn(...arg);
  // 删除挂载的属性
  delete context._fn;
  return res;
};
