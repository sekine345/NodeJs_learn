// アニメーションで使用する変数
var c1;    // 2d 描画コンテキスト
var y1;    // Array(20) : y 座標
var vy;    // Array(20) : y 方向速度 

// 毎秒 30 回実行する関数
function tick1() {
  // 描画領域をいったんクリアする
  c1.clearRect(0, 0, 600, 600);

  // 20個の円についてのループ
  var n;
  for (n = 0; n < 20; n++) {

    // 円を描画
    // y 座標を整数に変換してから描画する    
    var y2;
    y2 = Math.floor(y1[n]);
    c1.beginPath();
    c1.arc(n * 30 + 10, y2 + 10, 10, 0, Math.PI * 2);

    // 着色と影
    c1.fillStyle = 'rgb(0,128,255)'; // 紺色
    c1.shadowColor = 'rgb(0,0,0)';   // 影
    c1.shadowOffsetX = 5;
    c1.shadowOffsetY = 5;
    c1.shadowBlur = 5;
    c1.fill();

    // y 座標を速度分変化させ
    // 580を超えたら速度を反転する
    y1[n] = y1[n] + vy[n];   // 速度分移動
    vy[n]++;                 // vy を 1 加算
    if (y1[n] > 580) {       // 580 で反射
        vy[n] = 1-vy[n];
    }
  }
}

// 初期化のための関数
function draw_canvas() {
  // y1 に長さ20の配列を用意する
  y1 = new Array(20);
  vy = new Array(20);
  // c1 = 2d コンテキスト、を用意する
  var canv1 = document.getElementById('canvas_tag_1');
  c1 = canv1.getContext('2d');
  if (!canv1 || !canv1.getContext) {
      return false;
  }

  // 20組のy座標とy方向速度を設定する
  // y座標は 50～200、速度は 0～5 の実数とする
  var n;
  for (n = 0; n < 20; n++) {
      y1[n] = Math.random() * 150 + 50; // y座標
      vy[n] = Math.random() * 5;        // 速度
  }

  // 以後 tick1 を毎秒 30 回実行する
  setInterval(tick1, 33);
}
