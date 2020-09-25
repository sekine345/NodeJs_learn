// 使用するアニメーションのライブラリ anim_lib.js
//   anim_clearbg(2Dコンテキスト, x,y,w,h) : 背景を消去
//   anim_rect(2Dコンテキスト, 色,x,y,w,h) : 矩形
//   anim_spring(2Dコンテキスト, 色,x,y,段数,周波数,w,h) : 

// このアニメーションに登録する図形
var bg1;                     // 背景
var spring1,spring2,spring3; // 3つのスプリング
var rect1;                   // 支持棒

// 1 フレームの描画
function tick1() {
  // 背景
  bg1.show();
  // スプリング
  spring1.show();
  spring2.show();
  spring3.show();
  // 支持棒
  rect1.show();
 }

// 初期化
function initialize_page() {
  var c1;
  // 2D 描画コンテキスト c1 の準備
  sp_tcount = 0;
  var canv1 = document.getElementById('canvas_tag_1');
  c1 = canv1.getContext('2d');
  if (!canv1 || !canv1.getContext) {
      return false;
  }

  // アニメーション用のオブジェクトを設定する
  // 背景の消去領域の設定
  bg1=new anim_clearbg(c1,0,0,600,600);
  // 3 つのスプリングの設定
  spring1=new anim_spring(c1,"rgb(255,0,0)",50,50,4,1,100,200);
  spring2=new anim_spring(c1,"rgb(192,0,192)",250,50,4,2,60,100);
  spring3=new anim_spring(c1,"rgb(0,0,255)",400,50,6,0.5,100,400);
  // 支持棒の設定
  rect1=new anim_rect(c1,"rgb(64,64,128)",10,55,580,10);

  // インターバル設定 30フレーム/秒
	setInterval(tick1, 33);
}