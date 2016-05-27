//  this works!!!!!
// var btn = document.getElementsByClassName( "outer-button" );
// btn[0].addEventListener( "click", function () {
//   for( var index = 0; index < btn.length; index++ ) {
//     btn[index].nextElementSibling.classList.toggle("show");
//   }
// });

// but this is better!!! Note that you can only apply an eventListener to an array ELEMENT...not an array
var btn = document.getElementsByClassName( "outer-button" );
var arrow = document.getElementsByClassName( "hide-down-arrow" );

for( var index = 0; index < btn.length; index++ ) {
  btn[index].addEventListener( "click", function() {
    this.nextElementSibling.classList.toggle( "show" );
    this.lastElementChild.classList.toggle( "show-down-arrow" );
  });
}


















// doesn't work
// function toggleDownArrow( arrow ) {
//   document.arrow[index].innerHTML = "Hello!!!!!!!!!!!!!!!!!!!!!!!!!!!";
//   if( arrow.style.display === "none" ) {
//     arrow.style.display === "inline";
//   }
//
//   else {
//     arrow.style.display === "none";
//   }
// }
//
// for( var index = 0; index < btn.length; index++ ) {
//   var arrow = document.getElementsByClassName( "hide-down-arrow" )[index];
//   // var arrowIndex = arrow[index];
//   btn[index].addEventListener( "click", function( index ) {
//     this.nextElementSibling.classList.toggle( "show" );
//     toggleDownArrow( arrow );
//   });
// }
