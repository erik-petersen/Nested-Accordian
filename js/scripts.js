/* Erik Petersen Week 2 Weekend Project: Nested-Accordian */

//  this works!!!!!
// var btn = document.getElementsByClassName( "outer-button" );
// btn[0].addEventListener( "click", function () {
//   for( var index = 0; index < btn.length; index++ ) {
//     btn[index].nextElementSibling.classList.toggle("show");
//   }
// });

// but this is better!!! Note that you can only apply an eventListener to an array ELEMENT...not an array
var btn = document.getElementsByClassName( "outer-heading" );

for( var index = 0; index < btn.length; index++ ) {
  btn[index].addEventListener( "click", function() {
    // var selected = this.indexOf()
    // this.nextElementSibling.focus();
    this.nextElementSibling.classList.toggle( "show" );
    this.lastElementChild.classList.toggle( "show-down-arrow" );
    this.firstElementChild.classList.toggle( "hide-right-arrow" );
    //this next part doesn't work
    //btn[this+1].nextElementSibling.classList.setAttribute("class","hide");
    // if( this.indexOf() ) {
    //   btn[1].nextElementSibling.blur();
    // }

    //take current index position and put it at the end of a new array
    //then iterate through array - 1 and remove "show" class

    //iterate through all elements of array...if this is not this and this classList is show, then hide it
    // for( var innerIndex = 0; innerIndex < btn.length; innerIndex++ ) {
    //   if( btn[innerIndex].classList.contains( "show" ) ) {
    //     this.nextElementSibling.classList.setAttribute( "class", "hide" );
    //   }
    // }


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
