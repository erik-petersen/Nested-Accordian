/* Erik Petersen Week 3 Day 2: The Revenge of Nested-Accordian */

var $btn = $( ".outer-ul" );
var $innerBtn = $( ".inner-ul" );

$btn.on("click", ".outer-heading", function() {
  console.log("Hello");
  if( $(this).next().is( ":hidden" ) ) {
    $(this).next().slideDown( 800, function() {} );
    $(this).children( ".hide-down-arrow" ).show();
    $(this).children( ".fa-arrow-right" ).hide();

    $innerBtn.on("click", "h4", function() {
      console.log( "yaaayyy" );
      $(this).next().slideDown( 800, function() {} );
    });

    // if any of the other siblings that are not this are visible, hide them
  //   for( var index = 0; index < $btn.length; index++ ) {
  //     if( $btn.next().index() !== $(this).next().index() || $btn.next().index().is(":visible")) {
  //       console.log("Success!!!!!!!!!!");
  //       console.log($(this).index());
  //       $btn.next().index().hide();
  //     }
  //   }

  } // end if


    else {
      $(this).next().slideUp( 800, function() {});
      $(this).children( ".hide-down-arrow" ).hide();
      $(this).children( ".fa-arrow-right" ).show();
    }
}); // end click()





// when button is clicked, if it is closed, I want it to open. If it is open, I want it to close.
// if any other boxes are open, I want them to close.


// $( "#book" ).slideDown( "slow", function() {
//     // Animation complete.
//   });
// for( var index = 0; index < btn.length; index++ ) {
//   $btn[index].click( function() {
//     console.log("Button clicked");
//     $(this).next().show();
//   });
// }



// but this is better!!! Note that you can only apply an eventListener to an array ELEMENT...not an array
// var btn = document.getElementsByClassName( "outer-heading" );
// for( var index = 0; index < btn.length; index++ ) {
//   btn[index].addEventListener( "click", function() {
//     this.nextElementSibling.classList.toggle( "show" );
//     this.lastElementChild.classList.toggle( "show-down-arrow" );
//     this.firstElementChild.classList.toggle( "hide-right-arrow" );
//   });
// } // end workable vanilla js




















//  this works!!!!!
// var btn = document.getElementsByClassName( "outer-button" );
// btn[0].addEventListener( "click", function () {
//   for( var index = 0; index < btn.length; index++ ) {
//     btn[index].nextElementSibling.classList.toggle("show");
//   }
// });
