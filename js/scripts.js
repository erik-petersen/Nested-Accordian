/* Erik Petersen Week 3 Day 2: The Revenge of Nested-Accordian */

var $btn = $( ".outer-ul" );

$btn.on("click", ".outer-heading", function() {
  console.log("Button clicked");
  $(this).next().show();
});


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
