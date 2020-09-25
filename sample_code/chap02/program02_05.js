// program02_05.js: 代入だけ
// example 1 x, y の値を推測できるだろうか?
var x=1;
var y=2;
x=x+20;
y=x;
x=x+300;
console.log("x=",x," y=",y);

// example 2 なぜ xとy が交換されるのだろうか?
var x=1234;
var y=9876;
x=x-y;
y=y+x;
x=y-x;
console.log("x=",x," y=",y);