// 防抖
// 概念：用户连续点击，前面的触发都被取消，只有最后一次触发的回调在规定时间后才会触发。
// 即 如果连续触发 只会执行最后一次触发的回调

let btn = document.getElementById("input");
btn.addEventListener("click", debounce(fn, 1000));

function debounce(fn, deleay) {
  let timer = null;
  return function () {
    // 清除定时器，重新计时
    clearTimeout(timer);
    timer = null;
    timer = setTimeout(() => {
      // this 指向的 DOM 结点
      // 为了让 fn 函数可以访问到DOM实例对象，使用apply调用函数
      fn.apply(this, arguments);
    }, deleay);
  };
}

// 进阶版：第一次点击是立即执行的
// 这个触发提交函数的条件是 是否是第一次点击，如果是连续点击的话定时器内代码还没执行，t就不是null，上一个定时器就会被清除然后重开
function debounce2(fn, timer) {
  // 是否重置定时器的标识
  var t = null;
  // 返回的函数是最后点击事件所触发的回调函数
  return function () {
    // 判断 null 的时候尽量先转换成布尔值进行判断
    var firstClick = !t;
    // 如果定时器内代码没有执行（定时器还没走完，t没有被重置为null），就清空上一个定时器并且重开一个新的定时器
    if (t) {
      t.clearTimeout();
    }
    // 判断是否是第一次执行（定时器已经执行完，t被重置为null）
    if (firstClick) {
      // 为了让 submit 发送请求的函数可以访问到DOM实例对象，使用apply调用函数
      fn.apply(this, arguments);
    }
    t = setTimeout(() => {
      t = null;
    }, timer);
  };
}

// 节流：一段时间只能按一次---在规定的时间间隔内不会重复触发回调，只有大于这个时间间隔才会触发回调，降低触发频率

function throttle(fn, deleay) {
  let begin = 0;
  return function () {
    let now = Date.now();
    // 通过时间戳的方式进行比较
    if (now - begin > deleay) {
      // 重置基准时间
      begin = now;
      // 执行提交函数，begin起始值要被设置为触发满足触发条件的时间戳
      fn.apply(this, arguments);
    }
  };
}
