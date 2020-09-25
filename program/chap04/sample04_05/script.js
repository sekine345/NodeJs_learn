// プログラム全体で使用する変数
var c1;        // 2d 描画コンテキスト
var balls;     // 全 ball を格納する配列
var number_of_balls; // ball の数

// ballのクラスの定義
// 初期化
function ball() {
  this.x = Math.random() * 570 + 10;
  this.y = Math.random() * 570 + 10;
  this.vx = Math.random() * 50 - 25;
  this.vy = Math.random() * 50 - 25;
}

// move : 移動
ball.prototype.move = function() {
  if (this.x < 10  || this.x > 580) {
    this.vx = - this.vx;
  }
  if (this.y < 10  || this.y > 580) {
    this.vy = - this.vy;
  }
  this.x += this.vx;
  this.y += this.vy;
}

// show : 表示
ball.prototype.show = function() {
  // 円を描画
    // y 座標を整数に変換してから描画する    
    var x1,y1;
    x1 = Math.floor(this.x);
    y1 = Math.floor(this.y);
    
    c1.beginPath();
    c1.arc(x1,y1, 10, 0, Math.PI * 2);
    c1.fillStyle = 'rgb(0,128,255)'; // 紺色
    c1.shadowColor = 'rgb(0,0,0)';   // 影
    c1.shadowOffsetX = 5;
    c1.shadowOffsetY = 5;
    c1.shadowBlur = 5;
    c1.fill();
}

// ball クラスを使ったアニメーションの本体
// 毎秒 30 回実行する関数
function tick1() {
  // 描画領域をいったんクリアする
  c1.clearRect(0, 0, 600, 600);

  // 20個の円についてのループ
  var n;
  for (n = 0; n < number_of_balls; n++) {
    // ball を移動し、描画する
    balls[n].move();
    balls[n].show();     
  }
}

// 初期化
function draw_canvas() {
  // c1 = 2d コンテキスト、を用意する
  var canv1 = document.getElementById('canvas_tag_1');
  c1 = canv1.getContext('2d');
  if (!canv1 || !canv1.getContext) {
      return false;
  }

  // ball数の設定
  number_of_balls = 20;

  // 全ballを格納する配列の準備
  balls = new Array(number_of_balls);
  var n;
  // 全ballの初期化
  for (n = 0; n < number_of_balls; n++) {
      balls[n]=new ball();
    }

  // tick1 を毎秒 30 回実行するための設定
  setInterval(tick1, 33);
}