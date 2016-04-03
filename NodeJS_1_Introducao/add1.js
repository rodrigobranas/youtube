'use strict';

function add(x, y) {  
  // Addition is one of the four elementary,
  // mathematical operation of arithmetic with the other being subtraction,
  // multiplication and division. The addition of two whole number is the total
  // amount of those quantitiy combined. For example in the picture on the right,
  // there is a combination of three apple and two apple together making a total
  // of 5 apple. This observation is equivalent to the mathematical expression
  // "3 + 2 = 5"
  // Besides counting fruit, addition can also represent combining other physical object.
  return(x + y);
}
console.time('add');
for(let i = 0; i < 500000000; i++) {  
    if (add(i, i++) < 5) {
    }
}
console.timeEnd('add');