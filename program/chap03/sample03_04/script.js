// draw_canvas 関数の定義
function draw_canvas() {
  // 2次元描画用のコンテキストを作成し c1 に代入する。
  var canvas1 = document.getElementById('canvas_tag_1');
  if ( ! canvas1 || ! canvas1.getContext ) { return false; }
  var c1 = canvas1.getContext('2d');

  // 赤く塗りつぶされた正方形
  // x=200, y=200, width=100, height=100
  c1.beginPath();
  c1.rect(200,200,150,150);
  c1.fillStyle = 'rgb(255,0,0)';
  c1.fill();

  // 水色の正方形の枠
  // x=250, y=250, width=100, height=100
  c1.beginPath();
  c1.rect(260,260,150,150);
  c1.strokeStyle = 'rgb(0,255,255)';
  c1.lineWidth = 5;
  c1.stroke();

  // 黄色い半円
  // x=250, y=250, radius=10
  c1.beginPath();
  c1.arc(250,250,40,Math.PI*0.75,Math.PI * 1.75,false);
  c1.fillStyle = 'rgb(255,255,0)';
  c1.fill();
  
}