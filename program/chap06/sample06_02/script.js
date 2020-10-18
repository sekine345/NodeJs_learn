// jQuery による動作の指定
$( "#aaa" ).click(function() { 
  //ヘッダーのような部分, aaa という id に対して動作
  // .click(): クリックされたときにどんな動作をするか、今回は無名関数
  if ( $( "#fff" ).is( ":hidden" ) ) {
    // fff が隠れていたら
    $( "#fff" ).show( "slow" );
    //ゆっくり見せて
  } else {
    $( "#bbb"  ).slideUp();
  }
});
$( "#bbb" ).click(function() {
  if ( $( "#aaa" ).is( ":hidden" ) ) {
    $( "#aaa" ).show( "slow" );
  } else {
    $( "#ccc"  ).slideUp();
  }
});
$( "#ccc" ).click(function() {
  if ( $( "#bbb" ).is( ":hidden" ) ) {
    $( "#bbb" ).show( "slow" );
  } else {
    $( "#ddd"  ).slideUp();
  }
});
$( "#ddd" ).click(function() {
  if ( $( "#ccc" ).is( ":hidden" ) ) {
    $( "#ccc" ).show( "slow" );
  } else {
    $( "#eee"  ).slideUp();
  }
});
$( "#eee" ).click(function() {
  if ( $( "#ddd" ).is( ":hidden" ) ) {
    $( "#ddd" ).show( "slow" );
  } else {
    $( "#fff"  ).slideUp();
  }
});
$( "#fff" ).click(function() {
  if ( $( "#eee" ).is( ":hidden" ) ) {
    $( "eee" ).show( "slow" );
  } else {
    $( "#aaa"  ).slideUp();
  }
});