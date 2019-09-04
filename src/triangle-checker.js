export function triangleCheck(side1, side2, side3) {
  if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    $('#noTriangle').show();
  } else if (side1 === side2 && side1 != side3 || side1 === side3 && side1 != side2 || side2 === side3 && side2!= side1) {
    $('#isosceles').show();
  } else if (side1 === side2 && side1 === side3) {
    $('#equilateral').show();
  } else {
    $('#scalene').show();
  }
};
