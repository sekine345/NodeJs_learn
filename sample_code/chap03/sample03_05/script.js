function draw_canvas() {
  // 2次元描画用のコンテキストを作成し c1 に代入する。
  var canvas1 = document.getElementById('canvas_tag_1');
  if ( ! canvas1 || ! canvas1.getContext ) { return false; }
  var c1 = canvas1.getContext('2d');

  // 変数 i,jを定義する
  var i,j;
  // x 方向にi=0～14まで15マスを描画する
  for (i = 0; i < 15; i++) {
    // y 方向にy=0～14まで15マスを描画する
    for (j = 0; j < 15; j++) {
          c1.beginPath();
          // i の値によって r(赤)の輝度を変化させる
          // toString(10)で、文字列に変換
          var red = (i * 18).toString(10); 
          c1.fillStyle = 'rgb(' + red + ',0,0)';
          // i,j を座標に変換
          c1.rect(i * 40, j * 40, 38, 38);
          c1.fill(); // 色を塗る
      }
  }
}