"use strict";

function solveEquation(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
  let arr = [];
  if (D < 0) arr = [];
  if (D == 0) arr = [-b / (2 * a)];
  else if (D > 0) {
    arr.push((-b + Math.sqrt(D)) / (2 * a));
    arr.push((-b - Math.sqrt(D)) / (2 * a));
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent / 12 / 100;
  let creditBody = amount - contribution;
  let monthPayment =
    creditBody *
    (monthPercent + monthPercent / ((1 + monthPercent) ** countMonths - 1));
  let sum = monthPayment * countMonths;
  return +sum.toFixed(2);
}
