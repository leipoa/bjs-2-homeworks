"use strict";

function solveEquation(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
  let arr = [];
  if (D < 0) return arr;
  if (D == 0) arr = (-b + Math.sqrt(D)) / (2 * a);
  else if (D > 0) {
    let roots = [];
    roots.push((-b + Math.sqrt(D)) / (2 * a));
    roots.push((-b - Math.sqrt(D)) / (2 * a));
    arr = roots;
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent / 12;
  let creditBody = amount - contribution;
  let monthPayment =
    creditBody *
    (monthPercent + (monthPercent / (1 + monthPercent) ** countMonths - 1));
  let sum = contribution + creditBody + monthPayment * countMonths;
  return +sum.toFixed(2);
}
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
