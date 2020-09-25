// アニメーションで使用する変数
var c1;    // 2d 描画コンテキスト
var y1;    // Array(20) : 円の y 座標

// 毎秒 30 回実行する関数
function tick1() {
  // 描画領域をいったんクリアする
  c1.clearRect(0, 0, 600, 600);

  // 20個の円についてのループ
  var n;
  for (n = 0; n < 20; n++) {

    // x座標 n*30+10, 高さ y1[n] に円を描画 
    c1.beginPath();
    c1.arc(n * 30 + 10, y1[n] + 10, 10, 0, Math.PI * 2);

    // 色は紺、影をつけて、円を塗りつぶす
    c1.fillStyle = 'rgb(0,128,255)'; // 紺色
    c1.shadowColor = 'rgb(0,0,0)';   // 影
    c1.shadowOffsetX = 5;
    c1.shadowOffsetY = 5;
    c1.shadowBlur = 5;
    c1.fill();

    // y 座標を 10 増加し、もし580を超えたら
    // 画面の外に出てしまうので、0 に戻す
    y1[n] = y1[n] + 10;
    if (y1[n] > 580) {
        y1[n] = 0;
    }
  }
}

// 初期化のための関数
function draw_canvas() {
  // y1 に長さ20の配列を用意する
  y1 = new Array(20);

  // c1 = 2d コンテキスト、を用意する
  var canv1 = document.getElementById('canvas_tag_1');
  c1 = canv1.getContext('2d');
  if (!canv1 || !canv1.getContext) {
      return false;
  }

  // 20個の円のy座標をランダムに決める
  var n;
  for (n = 0; n < 20; n++) {
      y1[n] = Math.floor(Math.random() * 580);
  }

  // 以後 tick1 を毎秒 30 回実行する
  setInterval(tick1, 33);
}
