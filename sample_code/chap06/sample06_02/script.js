// jQuery による動作の指定
$( "#aaa" ).click(function() {
  if ( $( "#fff" ).is( ":hidden" ) ) {
    $( "#fff" ).show( "slow" );
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