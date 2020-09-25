// program02_02.js: 文字列の改行と2行以上のコメント
console.log("Line 1\nLine 2"); // Line 1 改行 Line 2と出力する。
console.log("This is"          // 行末まで "も;も無視してコメント
,"a pen.");                    // 行末までコメント
console.log( "One"            /* この記号で始まるコメントは...
複数行にわたってコメントとみなされ,
次の行にあるコメントの終了記号までが、
コメントになる */ , "Line.");