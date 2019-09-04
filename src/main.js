import { triangleCheck } from './triangle-checker.js';

$(document).ready(function() {
  $('form#sides').submit(function(event) {
    event.preventDefault();

    var side1 = parseInt($('input#side1').val());
    var side2 = parseInt($('input#side2').val());
    var side3 = parseInt($('input#side3').val());
    console.log(side1);
    console.log(typeof side1);
    console.log(side2);
    console.log(typeof side2);
    console.log(side3);
    console.log(typeof side3);

    triangleCheck(side1, side2, side3);
  });
});
