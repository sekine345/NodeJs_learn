// アニメーションのライブラリ
// anim_clearbg(2Dコンテキスト, x,y,w,h) : 背景を消去
// anim_rect(2Dコンテキスト, 色,x,y,w,h) : 矩形(アニメーションでは横棒)
// anim_spring(2Dコンテキスト, 色,x,y,段数,周波数,w,h) : 


// class anim_clearbg の定義
function anim_clearbg (cc1,xx0,yy0,ww0,hh0) {
  this.c2=cc1; // 2D コンテキスト
  this.xx=xx0;
  this.yy=yy0;
  this.ww=ww0;
  this.hh=hh0;
}
// class anim_rectの show メソッド
anim_clearbg.prototype.show=
function(){
  var c1=this.c2;
  c1.clearRect(this.xx,this.yy,this.ww,this.hh);
}
// class anim_rect の定義
function anim_rect (cc1,cc0,xx0,yy0,ww0,hh0) {
  this.c2=cc1; // 2D コンテキスト
  this.cc=cc0; // 色
  this.xx=xx0;
  this.yy=yy0;
  this.ww=ww0;
  this.hh=hh0;
}
// class anim_rectの show メソッド
anim_rect.prototype.show=
function(){
  var c1=this.c2;
  c1.beginPath();
  c1.fillStyle = this.cc;
  c1.rect(this.xx,this.yy,this.ww,this.hh);
  c1.fill();
}

// class spring の定義
function anim_spring (cc1,cc0,xx0,yy0,nn0,ff0,ww0,hh0){
  this.c2 = cc1;// 2Dコンテキスト
  this.xx=xx0;  // x coordinate
  this.cc=cc0;  // 色
  this.yy=yy0;  // y 座標
  this.nn=nn0;  // number of stages
  this.ff=ff0;  // frequency
  this.ww=ww0;  // width of stages
  this.hh=hh0;  // height of spring
  this.tt=0;    // reset frame count
}

// class spring の show メソッド
anim_spring.prototype.show = 
function  () {
  var n,h1,h2,h3;  // ローカル変数
  var c1=this.c2;  // 色
  var x0=this.xx;  // x 座標
  var y0=this.yy;  // y 座標
  var n0=this.nn;  // スプリング段数
  var w0=this.ww;  // スプリング幅
  var h0=this.hh;  // スプリング長さ

  // フレームカウントを +1 する
  this.tt++;

  // スプリング1段の高さを計算
  l=120+Math.floor(Math.sin(this.tt*0.033*this.ff*2*Math.PI)*h0/n0);

  // スプリングを描画
  for (n=0; n<n0; n++) {
	  h1=y0+10+n*l/5;
	  h2=h1+l/5;
	  h3=h2+l/5;
	  c1.beginPath();
	  c1.moveTo(x0+w0,h1);
	  c1.bezierCurveTo(x0+2*w0,h1,x0+2*w0,h3,x0+w0,h3);
	  if (n<(n0-1)) {
      c1.moveTo(x0+w0,h3);
      c1.bezierCurveTo(x0,h3,x0,h2,x0+w0,h2);
	  }
    c1.lineWidth=10;
    c1.strokeStyle = "gray";
    c1.stroke();
  }

  // ボールを描画
  c1.beginPath();
  c1.arc(x0+w0, y0+66+l*(n0+1)/5, 60, 0, Math.PI * 2, true);
  c1.fillStyle = this.cc;
  c1.fill();
  c1.beginPath();
  c1.arc(x0+w0+20, y0+66+l*(n0+1)/5-30, 10, 0, Math.PI * 2, true);
  c1.fillStyle = "white";
  c1.fill();
}