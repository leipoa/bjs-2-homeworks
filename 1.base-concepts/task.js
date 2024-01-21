"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - 4 * a * c;
  if(D < 0)
    return [];
  let roots;
  if(D == 0)
    roots = (-b + Math.sqrt(D)) / (2 * a);
  else if(D > 0){
    let tmp = [];
    tmp.push((-b + Math.sqrt(D)) / (2 * a));
    tmp.push((-b - Math.sqrt(D)) / (2 * a));
    roots = tmp;
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}