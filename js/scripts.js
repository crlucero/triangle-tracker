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

if ((sideA) + (sideB) <= sideC){
    $(".not-triangle").show();
}
if ((sideB) + (sideC) <= sideA){
    $(".not-triangle").show();
}
if ((sideA) + (sideC) <= sideB){
    $(".not-triangle").show();
}
else if ((sideA !== sideB !== sideC) &&
    ((sideA) + (sideB) >= sideC) &&
    ((sideB) + (sideC) >= sideA) &&
    ((sideA) + (sideC) >= sideB))
 {
  $(".scalene").show();
}

});

});
