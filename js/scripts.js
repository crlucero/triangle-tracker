$(document).ready(function() {
  $(".formOne").submit(function(event) {
  event.preventDefault();

  var sideA = parseInt($("#sideA").val());
  var sideB = parseInt($("#sideB").val());
  var sideC = parseInt($("#sideC").val());


  if ( sideA === sideB && sideA === sideC ) {
    $(".equilateral").show();
  }
   if (sideA === sideB && sideA != sideC) {
    $(".isosceles").show();
  }
if (sideA === sideC && sideA != sideB ) {
  $(".isosceles").show();
}
  if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
    $(".scalene").show();
  }
if ((sideA) + (sideB) <= sideC){
    $(".not-triangle").show();
}
if ((sideB) + (sideC) <= sideA){
    $(".not-triangle").show();
}
if ((sideA) + (sideC) <= sideB){
    $(".not-triangle").show();
}
});

});
