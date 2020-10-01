// アニメーションで使用する変数
var c1;    // 2d 描画コンテキスト
var y0;    // アニメーションで増加していく数値

// 毎秒 30 回実行する関数
function tick1() {
  // 描画領域をいったんクリアする
  c1.clearRect(0, 0, 600, 600);

  // 20個の円についてのループ
  var n; // n 番目の円を表す変数
  var y1,y2; // y 座標の計算に用いる
  for (n = 0; n < 20; n++) {

    // n によって動き方を変化させる
    y1 = (n * 10); 
    y2 = (y1 + y0 * (n % 3 + 1)) % 590;
    //y2 = (y0 * (n % 3 + 1)) % 590;
    //y2 = Math.floor(y0 * n / 50 + 1) % 590;
    // x座標 n*30+10, 高さ y1[n] に円を描画 
    c1.beginPath();
    c1.arc(n * 30 + 10, y2 + 10, 10, 0, Math.PI * 2); // (x座標, y座標, 半径, スタート角度, ストップ角度)

    // 色は紺、影をつけて、円を塗りつぶす
    c1.fillStyle = 'rgb(0,128,255)'; // 紺色
    c1.shadowColor = 'rgb(0,0,0)';   // 影
    c1.shadowOffsetX = 5;
    c1.shadowOffsetY = 5;
    c1.shadowBlur = 5;
    c1.fill();
    
    // y0 を増加する
    y0++;

  }
}

// 初期化のための関数
function draw_canvas() {

  // c1 = 2d コンテキスト、を用意する
  var canv1 = document.getElementById('canvas_tag_1');
  c1 = canv1.getContext('2d');
  if (!canv1 || !canv1.getContext) {
      return false;
  }

  // y0 を初期化する
  y0 = 0;

  // tick1 を毎秒 30 回実行するよう設定する(33ms 毎に変更されるように)
  setInterval(tick1, 33);
}
