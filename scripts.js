$(document).ready(function() {
  $('form#sides').submit(function(event) {
    event.preventDefault();

    var side1 = parseInt($('input#side1').val());
    var side2 = parseInt($('input#side2').val());
    var side3 = parseInt($('input#side3').val());

    console.log(side1)
    console.log(side2)
    console.log(side3)

    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
      $('#noTriangle').show();
    } else if  (side1 === side2 && side1 != side3 || side1 === side3 && side1 != side2 || side2 === side3 && side2!= side1) {
      $('#isosceles').show();
    } else if (side1 === side2 && side1 === side3) {
      $('#equilateral').show();
    } else {
      $('#scalene').show();
    };
  });
});
