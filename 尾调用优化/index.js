// 看了下阮一峰学的尾调用

// 大概就这么回事..做下笔录

// 说白了就是在某个函数的最后一步调用另一个函数

function f(x) {
    return g(x)
}

// 不是尾调用的例子 
// 情况一
function f(x) {
    let y = g(x);
    return y
}

// 情况二
function f(x) {
    return g(x) + 1;
}

// 两处用到了尾调用
function f(x) {
    if (x > 0) {
      return m(x)
    }
    return n(x);
  }

//   尾调用优化 
// 函数调用会在内存形成一个"调用记录", 又称"调用帧" 如果函数A的内部调用函数B, 那么在A调用记录上方, 还会形成一个B的调用记录.等到B运行结束, 将结果返回给A B的调用记录才会消失, 如果函数B内部还要调用到函数C.那就还有一个C的调用记录栈.. 以此类推形成"调用栈"

// 例子
function f() {
    let m = 1;
    let n = 2;
    return g(m + n);
}

f();

// 等同于
function f() {
    return g(3);
}
f();

// 等同于
g(3);

// 尾递归

function factorial(n) {
    if(n ===1 ) return 1;
    return n * factorial(n - 1);
}

factorial(5);

// ↑ ↑ ↑ 像这种会保存成千上万个调用记录 容易造成"栈溢出"

// 我们改成尾递归
function factorial(n, total) {
    if( n===1 ) return total;
    return factorial(n - 1 * total); 
}

factorial(5 ,1)