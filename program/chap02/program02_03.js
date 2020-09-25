// program02_03.js: 変数、代入、データ型
var x, y, z;
x=100;
y=23;
z=x+y;
// x + y は数値計算となり 123 になる
console.log("x=",x," y=",y,"z=",z);
x="abc";
y="de";
z=x+y;
// x + y は文字の結合になり "abcde" になる
console.log("x=",x," y=",y," z=",z);
x="100";
y="23";
z=x+y;
// x + y は文字の結合になり "10023" になる
console.log("x=",x," y=",y," z=",z);