// server05_01.js
// 簡易 Web サーバー サンプル
// なにがあっても、Hello! World! しか返さない!

// 開始メッセージ
console.log('server05_01 開始')

// http サーバー
var http1 = require('http'); // 受信プログラムを設定
http1.createServer(          // 受信したら動作する
  // メッセージを処理する無名関数
  function (req, msg1) {
    msg1.writeHead(200, {'Content-Type': 'text/plain'});
    msg1.end('Hello! World!\n');
  }
).listen(8080, '127.0.0.1');  // IP とポートを設定する
// url を表示しておく(動作とは無関係)
console.log('http://127.0.0.1:8080/index.html')