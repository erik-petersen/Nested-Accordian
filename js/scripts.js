/* Erik Petersen Week 3 Day 2: The Revenge of Nested-Accordian */

var $btn = $( ".outer-ul" );
var $innerBtn = $( ".inner-ul" );

// for outer-ul click event
$btn.on("click", ".outer-heading", function() {
  console.log("Hello");
  if( $(this).next().is( ":hidden" ) ) {
    $(this).next().slideDown( 800, function() {} );
    $(this).children( ".hide-down-arrow" ).show();
    $(this).children( ".fa-arrow-right" ).hide();

/*
    //if any of the other siblings that are not this are visible, hide them...on the right track but not working
    for( var index = 0; index < $btn.length; index++ ) {
      if( $btn.next().index() !== $(this).next().index() || $btn.next().index().is(":visible")) {
        console.log("Success!!!!!!!!!!");
        console.log($(this).index());
        $btn.next().index().hide();
      }
    }
*/

  } // end if

    else {
      $(this).next().slideUp( 800, function() {});
      $(this).children( ".hide-down-arrow" ).hide();
      $(this).children( ".fa-arrow-right" ).show();
    }
}); // end click()


// for inner-ul click event
$innerBtn.on("click", "h4", function() {
  console.log( "yaaayyy" );
  if( $(this).next().is( ":hidden" ) ) {
    $(this).next().slideDown( 800, function() {} );
    $(this).children( ".fa-arrow-circle-o-down" ).show();
    $(this).children( ".fa-arrow-circle-o-right" ).hide();
  }

  else {
    $(this).next().slideUp( 800, function() {});
    $(this).children( ".fa-arrow-circle-o-down" ).hide();
    $(this).children( ".fa-arrow-circle-o-right" ).show();
  }
});
