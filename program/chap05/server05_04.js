// server05_04.js
// 簡易 Web サーバー サンプル
// html 以外のコンテンツも返す

// ファイル名から content-type を得る
function get_type_str(fn1) { 
    // 拡張子と type_str の辞書配列
    var ext_table = { // 拡張子:contentType
        'html': 'text/html', 
        'htm' : 'text/htm', 
        'css' : 'text/css', 
        'js'  : 'text/javaScript; charset=utf-8', 
        'jpeg': 'image/jpeg', 
        'jpg' : 'image/jpg', 
        'gif' : 'image/gif', 
        'png' : 'image/png'
        };
    var len = fn1.length;            // 長さを取得
    var dot = fn1.lastIndexOf('.'); // 最後の'.'の位置を取得
    var ext2 = fn1.substring(dot + 1, len);//拡張子を得る
        // 拡張子 extension で 辞書 ext_table を引くことで
        // type_str を得る
    var type_str = ext_table[ext2.toLowerCase()]; 
    // python の辞書型
    // .toLowerCase(): 文字列を小文字に変換
    if(type_str === undefined){ 
        type_str = 'text/plain';
    }; 
    return type_str; 
} 

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
        // urlの最後が '/' ならその後に index.html をつける
        url1 = (url1.substring(url1.length - 1, 1) === '/')?url1 + 'index.html' : url1; 
        // ３項演算子、(条件式)?(True ならここの処理) : (Falseならここの処理)
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
                    msg1.writeHead(200, {'Content-Type': get_type_str(url1)}); 
                    // ファイル本体
                    msg1.write(data, "binary"); 
                    msg1.end(); 
                } 
            }
        ); 
    } 
); 

// listen 開始
console.log('server05_04.js 開始'); 
http_server.listen(TEST_SERVER_PORT, TEST_SERVER_IP); 
// サーバーが動作していることをコンソールに表示する
console.log('http://' + TEST_SERVER_IP + ':' + TEST_SERVER_PORT); 