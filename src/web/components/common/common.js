function common() {};
common._version = 0.1;
common.throttle = function (fn, wait) {
    var timer;
    console.log(fn)
    return function (...args) {
        console.log(args)
        if (!timer) {   // timer在延迟时间到达后会被置为空，执行if中的代码，又一次将timer置为执行次数
            timer = setTimeout(() => timer = null, wait); // setTimeout每次执行会返回执行次数
            console.log(timer)
            return fn.apply(this, args); // 把this绑定到原来的作用域，传入原来作用域中的参数，比如点击事件等
        }
    }
}
export default common