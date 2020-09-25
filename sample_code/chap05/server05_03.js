// server05_03.js
// 簡易 Web サーバー サンプル
// index.html以外のリンクもたどれる

// IP
var TEST_SERVER_IP = '127.0.0.1';
// Port
var TEST_SERVER_PORT = 8080;

// http サーバ
var http_server  = (require('http')).createServer(); 

// file system
var file_sys = require('fs');

// http_server に 'request' イベントを設定
http_server.on('request', 
    // server のリクエストを処理する無名関数
    function(req, msg1){
        // リクエストがきたら、url を取得
        var url1 = req.url;
        // ファイルを読み取り、その結果によって処理
        file_sys.readFile('.' + url1,'binary',
            // 読み取り結果を処理する無名関数
            function (err, data) {
                // もし err なら 404 エラーを返す
                if(err){ 
                    msg1.writeHead(404, {'Content-Type': 'text/plain'}); 
                    msg1.write('Sagashi monoha nandesuka?\n'); 
                    msg1.end();
                // 正常に読み取れたら、httpヘッダをつけて送信する
                }else{
                    // HTTP プロトコルに従ったヘッダ
                    msg1.writeHead(200, {'Content-Type': 'text/html'}); 
                    // ファイル本体
                    msg1.write(data, "binary"); 
                    msg1.end(); 
                } 
            }
        ); 
    } 
); 

// listen 開始
console.log('server05_03.js 開始'); 
http_server.listen(TEST_SERVER_PORT, TEST_SERVER_IP); 
// サーバーが動作していることをコンソールに表示する
console.log('http://' + TEST_SERVER_IP + ':' + TEST_SERVER_PORT); 