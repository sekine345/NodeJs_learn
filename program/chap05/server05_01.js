// server05_01.js
// 簡易 Web サーバー サンプル
// なにがあっても、Hello! World! しか返さない!

// 開始メッセージ
console.log('server05_01 開始')

// http サーバー
var http1 = require('http');
// 受信プログラムを設定, http 通信を設定, http モジュールをロード（Node.js の import）
http1.createServer(          // 受信したら動作する
  // http モジュールの createServer メソッド
  // このメソッドでサーバを起動
  // http プロトコルによるリクエストを受信した場合に行うべき処理を引数として指定できる
  // メッセージを処理する無名関数
  function (req, msg1) { 
    //req:リクエストの種類, 今回は１れｑを無視
    //msg1:httpプロトコルに従って送受信を行うための変数
    msg1.writeHead(200, {'Content-Type': 'text/plain'}); //http header
    var n;
    for (n=0; n<10; n++){
      msg1.write("line"+n.toString(10)+"\n");//write:逐次文字列を表示
    }
    msg1.end('Hello! World!\n');// end:文字列を送信する、送信終了時にhttp送信を終了する
  }
).listen(8080, '127.0.0.1');  // IP とポートを設定する, 
//listen メソッドを適用
//createServerでサーバの作成は完了しているが、httpリクエストは受け付けない
//listenメソッドでIPとポートを指定することで受信が開始される
// url を表示しておく(動作とは無関係)
console.log('http://127.0.0.1:8080/index.html') 
//ここで言う index.html は Node.js が持っているファイル？