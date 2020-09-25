// draw_canvas 関数の定義
function draw_canvas() {
  // 2次元描画用のコンテキストを作成し c1 に代入する。
  var canvas1 = document.getElementById('canvas_tag_1');
  if ( ! canvas1 || ! canvas1.getContext ) { return false; }
  var c1 = canvas1.getContext('2d');

  // 描画の開始
  c1.beginPath();
  // x=200, y=200, width=100, height=100 の矩形を定義
  c1.rect(250,250,100,100);
  // r=255, g=0, b=0 (赤色) で図形を塗りつぶす
  c1.fillStyle = 'rgb(255,0,0)';
  c1.fill();
}