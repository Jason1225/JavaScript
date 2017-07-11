function abs(x) {
    if (typeof x !== 'number') { //判断参数类型
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
// console.log(abs('hello')); //数据类型不符合
// console.log(abs(3));
// console.log(abs(-3));
function foo(x) {
    console.log(x);
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
foo(10, 20, 40);
// javascript 要先扫描类,将变量提前
function foo1() {
    var x = 'Hello,' + y;
    console.log(x);
    var y = 'Bob';
}
foo1();
const PI = 3.14;
console.log(PI);
PI = 334;
console.log(PI);