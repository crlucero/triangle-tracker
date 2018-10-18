$(document).ready(function() {
  $(".formOne").submit(function(event) {
  event.preventDefault();

  var sideA = $("#sideA").val();
  var sideB = $("#sideB").val();
  var sideC = $("#sideC").val();


  if ( sideA === sideB && sideA === sideC ) {
    $(".equilateral").show();
  }
   if (sideA === sideB && sideA != sideC, sideA === sideC && sideA != sideB ) {
    $(".isosceles").show();
  }


  if (sideA != sideB && sideA != sideC) {
    $(".scalene").show();
  }


});

});
