// program02_04.js: if と for
var n;
for(n=0; n<5; n++){
    console.log(n,n*2,n*n);
}
// nが0~4のうち、n*2=n*nとなる場合、n*2<n*nとなる場合を表示する
var n;
for(n=0; n<5; n++){
    if(n*2 == n*n) {
        console.log("n=",n,",n*2 == n*n")
    }
    if(n*2 < n*n) {
        console.log("n=",n,",n*2 < n*n")
    }
}
// 0~50のうち, 2,3,5の倍数でない数を表示する
var n;
for(n=10; n<20; n++){
    if(n % 2 != 0) {
        if(n % 3 != 0) {
            if(n % 5 != 0) {
                console.log(n);
            }
        }
    }
}